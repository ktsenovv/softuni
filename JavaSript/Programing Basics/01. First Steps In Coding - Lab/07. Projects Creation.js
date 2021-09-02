function projectcre(input) {
    let nameArch = input[0];
    let numProjects = Number(input[1]);

    let totalTime = numProjects * 3;

    console.log(`The architect ${nameArch} will need ${totalTime} hours to complete ${numProjects} project/s.`);
}