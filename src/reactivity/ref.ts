class RefImpl {
  constructor(value) {}
}

export function ref(value) {
  return new RefImpl(value);
}
