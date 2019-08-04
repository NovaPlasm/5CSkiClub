import Express from 'express';
import ExpressGraphQL from 'express-graphql';
import Mongoose from 'mongoose';
import cors from 'cors';
import { GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    GraphQLFloat,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLSchema } from 'graphql';

import { dbcreds, port } from './config';

var app = Express();

app.use(cors());

Mongoose.connect(`mongodb+srv://${dbcreds}/Trips?retryWrites=true&w=majority`,{useNewUrlParser: true});

const TripModel = Mongoose.model('trip', {
    organizer: String,
    organizer_id: String,
    location: String,
    maxSlots: Number,
    occupiedSlots: Number,
    participants: [
        {
            name: String,
            student_id: String
        }
    ],
    cost: Boolean,
    price: Number,
    startDate: Date,
    endDate: Date
});


const ParticipantType = new GraphQLObjectType({
    name: 'Participant',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        student_id: { type: GraphQLString }
    }
});

const TripType = new GraphQLObjectType({
    name: 'Trip',
    fields: {
        id: { type: GraphQLID },
        organizer: { type: GraphQLString },
        organizer_id: { type: GraphQLString },
        location: { type: GraphQLString },
        maxSlots: { type: GraphQLInt },
        occupiedSlots: { type: GraphQLInt },
        participants: { type: GraphQLList(ParticipantType) },
        cost: { type: GraphQLBoolean },
        price: { type: GraphQLFloat },
        startDate: { type: GraphQLString },
        endDate: { type: GraphQLString }
    }
});

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            trips: {
                type: GraphQLList(TripType),
                resolve: () => {
                    return TripModel.find().exec();
                }
            },
            tripsByArg: {
                type: GraphQLList(TripType),
                args: {
                    id: { type: GraphQLID },
                    organizer_id: { type: GraphQLString },
                    organizer: { type: GraphQLString },
                    participant_id: { type: GraphQLString },
                    location: { type: GraphQLString },
                    date: { type: GraphQLString }
                },
                resolve: (root, args, context, info) => {

                    if (!args.participant_id) return TripModel.find(args).exec();

                    const { participant_id } = args;
                    
                    return TripModel.find({
                        ...(delete args.participant_id),
                        'participants.student_id': participant_id
                    }).exec();
                }
            },
            tripsSearch: {
                type: GraphQLList(TripType),
                args: {
                    organizer: { type: GraphQLString },
                    location: { type: GraphQLString },
                    date: { type: GraphQLString }
                },
                resolve: (root, args, context, info) => {
                    const q = {
                        organizer: {$regex: new RegExp(args.organizer, 'i')},
                        location: {$regex: new RegExp(args.location, 'i')}
                    };
                    return TripModel.find(q).exec();
                }
            }
        }
    })
});


app.use(
    '/graphql',
    ExpressGraphQL({
        schema: schema,
        graphiql: true
    })
);

app.listen(port, () => {
    console.log(`Listening at :${port}...`);
});
