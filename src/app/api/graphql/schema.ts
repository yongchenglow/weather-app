import "./weather/index.resolver";
import { builder } from "@/app/api/graphql/builder";

const schema = builder.toSchema();

export { schema };
