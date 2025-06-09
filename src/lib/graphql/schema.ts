import SchemaBuilder from "@pothos/core";

const builder = new SchemaBuilder({});

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      resolve: () => "Hello from Pothos!",
    }),
  }),
});

const schema = builder.toSchema();

export { schema };
