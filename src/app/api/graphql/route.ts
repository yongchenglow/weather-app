import { schema } from "@/app/api/graphql/schema";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";

const server = new ApolloServer({ schema });

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
