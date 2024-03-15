function makeFriendsList(friends) {
    let mainUl = document.createElement('ul');
    friends.forEach(elem => {
        let li = document.createElement('li');
        li.textContent = `${elem.firstName} ${elem.lastName}`;
        mainUl.append(li);
    });
    return mainUl;
}
