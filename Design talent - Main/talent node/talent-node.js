const node = document.querySelector(".node");
const node1 = document.querySelector(".node" + 1);
node1.addEventListener("mousedown", mouseDown)

nodeList = [node, node1];

const button = document.querySelector(".add-node");
let counter = 1;
button.addEventListener("click", () => {
    counter++;
    newNode = node.cloneNode(true)
    newNode.classList.replace("node", "node" + counter);

    nodeList.push(newNode);
    container.appendChild(newNode);
    // console.log(nodeList);

    newNode.addEventListener("mousedown", (e) => {
        mouseDown(e)
    });
});

// let newX = 0, newY = 0, startX = 0, startY = 0;
node.addEventListener("mousedown", mouseDown)


function mouseDown(e) {
    nodeList[0].style.transition = "none";

    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e) {
    newX = startX - e.clientX;
    newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    node.style.top = (node.offsetTop - newY) + "px";
    node.style.left = (node.offsetLeft - newX) + "px";

    // node.style.top = startY + "px";
    // node.style.left = startX + "px";

    // console.log({newX, newY});
    // console.log({startX, startY});
}

function mouseUp(e) {
    document.removeEventListener("mousemove", mouseMove);
}