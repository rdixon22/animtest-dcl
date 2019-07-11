# animtest-dcl
Simple scene to isolate some GLTF animation quirks. 

I'm not sure if these represent problems with the SDK, or just in the ways that these GLTF files and animations were created, or are being scripted. However the GLTF models all appear fine in the Balylon.js sandbox.

There are two issues to illustrate:

1. Unintended animation blending

The rabbit model in this scene has multiple idle animations. When you click on the rabbit, it switches from "idle1" to "idle2". It works well once or twice, but then a blend of the two animations starts playing, making the rabbit look damaged. And it never fully recovers after that.

2. First instance of model won't animate

Two instances of the same flag model are loaded. The model has a flag-waving animation named "Take_001". No matter how you try, the first instance of the model will never animate. However the second instance of the model always animates -- even if you never call play() on its AnimationState clip. (Note: I originally tried to reuse the same GLTFShape object and the same AnimationState object for both instances, but that had the same result.)
