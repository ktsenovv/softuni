function constructionCrew(obj) {
    if (obj.dizziness == true) {
        let hidratation = 0.1 * obj.weight * obj.experience;
        obj.levelOfHydrated += hidratation;
        obj.dizziness = false;
    }
    
    return obj;
}

const obj1 = {
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
};

constructionCrew(obj1);

console.log();

const obj2 = {
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
};

constructionCrew(obj2);

console.log();

const obj3 = {
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}

constructionCrew(obj3);