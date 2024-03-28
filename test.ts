import { createLdoDataset, getDataset } from "@ldo/ldo";
import { OuterShapeShapeType } from "./ldo/shape.shapeTypes";

// This includes innerProp triple
console.log(
    ...getDataset(createLdoDataset([]).usingType(OuterShapeShapeType).fromJson({
        outerProp: {
            "@id": "http://example.com/outerHasId",
            innerProp: "Hello World",
        },
    }))
);

// This does not include the innerProp triple
console.log(
    ...getDataset(createLdoDataset([]).usingType(OuterShapeShapeType).fromJson({
        outerProp: {
            innerProp: "Hello World",
        },
    }))
);
