function construct(nameIn, materialIn, assembleIn, durationIn) {
    let name = nameIn;
    let material = (!materialIn ? "human" : materialIn);
    let assemble = (!assembleIn ? true : assembleIn);
    let duration = (!durationIn ? 1000 : durationIn);
    let creation = {name, material, assemble, duration};
    return creation;
}

