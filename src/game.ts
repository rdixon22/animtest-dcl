/// -------- SCENE CREATION FUNCTIONS --------

function spawnModel(filename: string, x: number, y: number, z: number, scaleX: number = 1, scaleY: number = 1, scaleZ: number = 1) {

  const mod = new Entity();
  mod.addComponent(new GLTFShape("models/" + filename));

  mod.addComponent(new Transform({ position: new Vector3(x, y, z),
                                      scale: new Vector3(scaleX, scaleY, scaleZ) }));

  engine.addEntity(mod);
  return mod;
}

  // rabbit test

  // Click the rabbit to switch from idle1 to idle2 animations.
  // It works for the first couple times, but after that the animations start blending.

  let idle1:boolean = true;

  const testbunny = spawnModel("animals/Low_Rabbit_v01.gltf", 2,0,2, 1.5,1.5,1.5);

  const anim = new Animator();
  let idleAnim:AnimationState = new AnimationState("Arm_rabbit|idle_1", {looping: true});
  anim.addClip(idleAnim);
  let idleAnim2:AnimationState = new AnimationState("Arm_rabbit|idle_2", {looping: true});
  idleAnim2.weight = 0;
  anim.addClip(idleAnim2);
  testbunny.addComponent(anim);
  idleAnim.play();

  testbunny.addComponentOrReplace(
    new OnClick(() => {
      if (idle1)
      {
        idleAnim.stop();
        idleAnim.weight = 0;

        idleAnim2.stop();
        idleAnim2.weight = 1;
        idleAnim2.play();

        idle1 = false;
      }
      else
      {
        idleAnim2.stop();
        idleAnim2.weight = 0;

        idleAnim.stop();
        idleAnim.weight = 1;
        idleAnim.play();

        idle1 = true;
      }
    })
  )

  // flag test

  // Loading the same model two times. It has a flag-waving animation
  // called Take_001. The first instance never gets the animation to work.
  // The second instance, the animation always works -- even if you don't call play()!.

  const flag1 = spawnModel("animatedFlag.glb", 5,0,6, 1,1,1);
  let flagAnim1:Animator = new Animator();
  let flagClip1 = new AnimationState("Take_001", { looping: true, speed: 0.5 });
  flagClip1.playing = false;
  flagAnim1.addClip(flagClip1);
  flag1.addComponent(flagAnim1);

  flagClip1.play();

  const flag2 = spawnModel("animatedFlag.glb", 10,0,6, 1,1,1);
  let flagAnim2:Animator = new Animator();
  let flagClip2 = new AnimationState("Take_001", { looping: true, speed: 0.5 });
  flagClip2.playing = false;
  flagAnim2.addClip(flagClip2);
  flag2.addComponent(flagAnim2);

  // flag2's animation will play, even if play() is never called. 
  // It even plays if flagClip1.play() is never called,
  // but flagClip1 never plays at all.

  //flagClip2.play();
