const pageStart = document.querySelector('.page-start');
const pageStart2 = document.querySelector('.page-start');
const content = document.querySelector('.content');

pageStart.innerHTML = title + typesExplanation + filterOptions;

function timelineOrder() {
    content.innerHTML = timelineOrderInfo + gameMetalGearSolid3_SnakeEater + gameMetalGearSolid_PortableOps + gameMetalGearSolid_PeaceWalker + gameMetalGearSolidV_GroundZeroes + gameMetalGearSolidV_ThePhantomPain + gameMetalGear + gameMetalGear2_SolidSnake + gameMetalGearSolid + gameMetalGearSolid2_SonsOfLiberty + gameMetalGearSolid4_GunsOfThePatriots + gameMetalGearRising_Revengeance + footer;

    setupCollapsible();
}

function releaseOrder() {
    content.innerHTML = gameMetalGear + gameSnakesRevenge + gameMetalGear2_SolidSnake + gameMetalGearSolid + gameMetalGearSolid2_SonsOfLiberty + gameMetalGearSolid_TheTwinSnakes + gameMetalGearSolid3_SnakeEater + gameMetalGearSolid_PortableOps + gameMetalGearSolid4_GunsOfThePatriots + gameMetalGearSolid_PeaceWalker + gameMetalGearRising_Revengeance + gameMetalGearSolidV_GroundZeroes + gameMetalGearSolidV_ThePhantomPain + gameMetalGearSurvive + gameMetalGearSolidDelta_SnakeEater + footer;

    setupCollapsible();
}

function disableCheckboxes() {
    document.getElementById("remake").checked = false;
    document.getElementById("remake").disabled = true;
    document.getElementById("remake").nextElementSibling.style.color = "grey";
    document.querySelector('.color-remake').style.color = "grey";

    document.getElementById("non-canon").checked = false;
    document.getElementById("non-canon").disabled = true;
    document.getElementById("non-canon").nextElementSibling.style.color = "grey";
    document.querySelector('.color-non-canon').style.color = "grey";
}

function enableCheckboxes() {
    document.getElementById("remake").disabled = false;
    document.getElementById("remake").nextElementSibling.style.color = "white";
    document.querySelector('.color-remake').style.color = "yellow";

    document.getElementById("non-canon").disabled = false;
    document.getElementById("non-canon").nextElementSibling.style.color = "white";
    document.querySelector('.color-non-canon').style.color = "red";
}

disableCheckboxes();

const timelineRadio = document.querySelector('input[name="order"][value="timeline-order"]');

timelineRadio.addEventListener('change', () => {
    if (timelineRadio.checked) {
        disableCheckboxes();
    }
});

const releaseRadio = document.querySelector('input[name="order"][value="release-order"]');

releaseRadio.addEventListener('change', () => {
    if (releaseRadio.checked) {
        enableCheckboxes();
    }
});

document.querySelector('.filters').addEventListener('click', () => {
    const selectedRadio = document.querySelector('input[type=radio]:checked');

    const spinOff = document.getElementById('spin-off');
    const gameSpinOff1 = gameMetalGearSolid_PortableOps;
    const gameSpinOff2 = gameMetalGearRising_Revengeance;

    const remake = document.getElementById('remake');
    const gameRemake1 = gameMetalGearSolid_TheTwinSnakes;
    const gameRemake2 = gameMetalGearSolidDelta_SnakeEater;

    const nonCanon = document.getElementById('non-canon');
    const gameNonCanon1 = gameSnakesRevenge;
    const gameNonCanon2 = gameMetalGearSurvive;

    if (selectedRadio.value === 'release-order') {
        if (!spinOff.checked) {
            gameMetalGearSolid_PortableOps = '';
            gameMetalGearRising_Revengeance = '';
        }
        if (!remake.checked) {
            gameMetalGearSolid_TheTwinSnakes = '';
            gameMetalGearSolidDelta_SnakeEater = '';
        }
        if (!nonCanon.checked) {
            gameSnakesRevenge = '';
            gameMetalGearSurvive = '';
        }

        releaseOrder();
    }
    else {
        if (!spinOff.checked) {
            gameMetalGearSolid_PortableOps = '';
            gameMetalGearRising_Revengeance = '';
        }

        timelineOrder();
    }

    gameMetalGearSolid_PortableOps = gameSpinOff1;
    gameMetalGearRising_Revengeance = gameSpinOff2;

    gameMetalGearSolid_TheTwinSnakes = gameRemake1;
    gameMetalGearSolidDelta_SnakeEater = gameRemake2;

    gameSnakesRevenge = gameNonCanon1;
    gameMetalGearSurvive = gameNonCanon2;
});

timelineOrder();
