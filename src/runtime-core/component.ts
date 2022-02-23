export function createComponentIntance(vnode) {
  const component = {
    vnode,
    type: vnode.type,
    setupState: {},
  };
  return component;
}

export function setupComponent(instance) {
  // TODO
  // initProps()
  // initSlots()
  setupStatefulComponent(instance);
}

function setupStatefulComponent(instance) {
  const Component = instance.type;

  instance.proxy = new Proxy(
    {},
    {
      // setupState
      get(tyrget, key) {
        const { setupState } = instance;
        if (key in setupState) {
          return setupState[key];
        }
      },
    }
  );

  const { setup } = Component;
  if (setup) {
    const setupResult = setup();
    handleSetupResult(instance, setupResult);
  }
}

function handleSetupResult(instance, setupResult) {
  if (typeof setupResult === "object") {
    instance.setupState = setupResult;
  }
  finishComponentSetup(instance);
}

function finishComponentSetup(instance: any) {
  const Component = instance.type;
  instance.render = Component.render;
}
