# animtest-dcl
Simple scene to isolate some GLTF animation quirks.

There are two issues to illustrate:

1. Unintended animation blending

The rabbit model in this scene has multiple idle animations. When you click on the rabbit, it switches from "idle1" to "idle2". It works well once or twice, but then a blend of the two animations starts playing, makeing the rabbit look damaged. And it never fully recovers after that.

2. First instance of model won't animate

Two instances of the same flag model are loaded. The model has a flag-waving animation named "Take_001". No matter how you try, the first instance of the model will never animate. However the second instance of the model always animates -- even if you never call play() on its AnimationState clip.
