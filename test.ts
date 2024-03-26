import { createLdoDataset } from "@ldo/ldo";
import { ShapeShapeType } from "./ldo/shape.shapeTypes";

const subject = createLdoDataset([]).usingType(ShapeShapeType).fromSubject("http://example.org/Shape");

console.log(
    // Should be "string" but returns undefined
    subject.prop, typeof subject.prop,
);
