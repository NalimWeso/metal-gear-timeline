const typesExplanation = `
<div class="types-explanation">
    <div class="explanation main">
        <div class="text"><span class="type">MAIN</span>
            means the game is considered an integral part of the main storyline within the established canon of the franchise.
        </div>
    </div>

    <div class="explanation spin-off">
        <div class="text"><span class="type">SPIN-OFF</span>
            means the game may not be fully canon, but its plot intersects with or complements the main story, expanding upon elements or characters within the established universe.
        </div>
    </div>

    <div class="explanation remake">
        <div class="text"><span class="type">REMAKE</span>
            means the game retells the story of the original game with updated graphics and other improvements, but it is not considered canon.
        </div>
    </div>

    <div class="explanation non-canon">
        <div class="text"><span class="type">NON-CANON</span>
            means the game exists outside of the established continuity of the franchise, and its plot is not considered canon.
        </div>
    </div>
</div>

<hr>
`;

const filterOptions = `
<div class="filter-options-container" unselectable="on" onselectstart="return false">
    <div class="filter-options-radio">
        <input type="radio" id="radio-one" name="order" value="timeline-order" checked>
		<label for="radio-one">TIMELINE ORDER</label>
		<input type="radio" id="radio-two" name="order" value="release-order">
		<label for="radio-two">RELEASE ORDER</label>
    </div>

        <div class="filter-options-checkbox">
            <div class="checkbox-container">
                <input type="checkbox" id="spin-off" checked>
                <label for="spin-off">Show <span class="color-spin-off">SPIN-OFF</span> Games (Highly Recommended)</label>
            </div>

            <div class="checkbox-container">
                <input type="checkbox" id="remake">
                <label for="remake">Show <span class="color-remake">REMAKE</span> Games (Only Release Order)</label>
            </div>

            <div class="checkbox-container">
                <input type="checkbox" id="non-canon">
                <label for="non-canon">Show <span class="color-non-canon">NON-CANON</span> Games (Only Release Order)</label>
            </div>
        </div>

    <div class="filter-options-button">
        <button class="filters">APPLY</button>
    </div>
</div>

<hr>
`;

const timelineOrderInfo = `
<div class="timeline-order-info-container">
    <div class="timeline-order-info">
        <p>The list doesn't include games that are <span class="color-remake">remakes</span>:</p>
        <ul>
            <li><strong>Metal Gear Solid: The Twin Snakes (2004)</strong></li>
            <li><strong>Metal Gear Solid Δ: Snake Eater (TBA)</strong></li>
        </ul>
    </div>

    <div class="timeline-order-info">
        <p>The list doesn't include games that are <span class="color-non-canon">non-canon</span>:</p>
        <ul>
            <li><strong>Snake's Revenge (1990)</strong></li>
            <li><strong>Metal Gear Survive (2018)</strong></li>
        </ul>
    </div>
</div>

<hr>
`;

let gameMetalGear = `
<div class="container-game main">
    <button class="collapsible">
        <div class="type">MAIN</div>
        <div class="title">Metal Gear (1987)</div>
    </button>
     <div class="container-info">
         <div class="info">
            <div class="incident">1995: Outer Heaven Uprising</div>
            <div class="text">
                The <strong>Outer Heaven Uprising</strong>, also known as the <strong>Outer Heaven Incident</strong> or <strong>Outer Heaven Revolt</strong>, was an attempt to subvert the global military balance of power by the mercenary nation of <strong>Outer Heaven</strong>, through the development of the "ultimate weapon" <strong>Metal Gear</strong>. Outer Heaven's power grab was a matter of grave concern for the major powers, which resulted in the execution of <strong>Operation Intrude N313</strong> by <strong>Solid Snake</strong> of <strong>FOXHOUND.</strong>
            </div>
        </div>
        <img src="images/Metal Gear (1987).jpg" alt="Metal Gear (1987)">
    </div>
</div>
`;

let gameSnakesRevenge = `
<div class="container-game non-canon">
    <button class="collapsible">
        <div class="type">NON-CANON</div>
        <div class="title">Snake's Revenge (1990)</div>
    </button>
    <div class="container-info">
        <div class="info">
            <div class="incident">1998: Operation 747</div>
            <div class="text">
                Non-canonical sequel to <strong>Metal Gear (1987)</strong>. The <strong>Operation 747</strong> was a mission aimed at thwarting a potential global threat, which involved the secret construction of a new <strong>Metal Gear</strong> in a <strong>Middle Eastern nation</strong>. Lt. <strong>Solid Snake</strong>, the <strong>FOXHOUND</strong> operative responsible for the destruction of the previous <strong>Metal Gear</strong>, received order to lead a three-man team to the enemy's base in order to destroy the <strong>emerging danger</strong> and neutralize the <strong>hostile forces</strong>.
            </div>
        </div>
        <img src="images/Snake's Revenge (1990).jpg" alt="Snake's Revenge (1990)">
     </div>
</div>
`;

let gameMetalGear2_SolidSnake = `
<div class="container-game main">
    <button class="collapsible">
        <div class="type">MAIN</div>
        <div class="title">Metal Gear 2: Solid Snake (1990)</div>
    </button>
    <div class="container-info">
        <div class="info">
            <div class="incident">1999: Zanzibar Land Disturbance</div>
            <div class="text">
                The <strong>Zanzibar Land Disturbance</strong> was a period of geopolitical tension that originated in the <strong>Central Asian state of Zanzibar Land</strong> toward the end of the 20th century. Zanzibar Land attempted to achieve military and economic superiority through the belligerent acquisition of <strong>nuclear weaponry</strong> and <strong>energy resources</strong>, but its ambitions were thwarted by famed mercenary <strong>Solid Snake</strong> in the <strong>NATO-U.S.</strong> <strong>Operation Intrude F014</strong>.
            </div>
        </div>
        <img src="images/Metal Gear 2 - Solid Snake (1990).jpg" alt="Metal Gear 2: Solid Snake (1990)">
    </div>
</div>
`;

let gameMetalGearSolid = `
<div class="container-game main">
    <button class="collapsible">
        <div class="type">MAIN</div>
        <div class="title">Metal Gear Solid (1998)</div>
    </button>
    <div class="container-info">
        <div class="info">
            <div class="incident">2005: Shadow Moses Incident</div>
            <div class="text">
                The <strong>Shadow Moses Incident</strong> was an armed revolt led by <strong>FOXHOUND</strong> and the <strong>Next-Generation Special Forces</strong> on <strong>Shadow Moses Island</strong>, <strong>Alaska</strong>. Commanded by <strong>Liquid Snake</strong>, they formed the <strong>Sons of Big Boss</strong> and seized a secret nuclear-weapon facility on <strong>February 28, 2005</strong>. FOXHOUND took hostages, including <strong>DARPA chief Donald Anderson</strong> and <strong>ArmsTech president Kenneth Baker</strong>, along with a <strong>soldier</strong> who resisted the uprising.
            </div>
        </div>
        <img src="images/Metal Gear Solid (1998).jpg" alt="Metal Gear Solid (1998)">
    </div>
</div>
`;

let gameMetalGearSolid2_SonsOfLiberty = `
<div class="container-game main">
    <button class="collapsible">
        <div class="type">MAIN</div>
        <div class="title">Metal Gear Solid 2: Sons of Liberty / Substance (2001)</div>
    </button>
    <div class="container-info">
        <div class="info">
            <div class="incident">2007: Tanker Incident</div>
            <div class="incident">2009: Big Shell Incident</div>
            <div class="text">
                The <strong>Tanker Incident</strong>, caused by the <strong>Patriots</strong> on <strong>August 8, 2007</strong>, involved the takeover of the <strong>USS Discovery</strong> to seize the <strong>Metal Gear RAY</strong> prototype. The <strong>Big Shell Incident</strong> occurred on <strong>April 29, 2009</strong>, when <strong>FOXHOUND</strong> recruit <strong>Raiden</strong> was tasked with infiltrating the <strong>Big Shell</strong>, an offshore facility the government claimed had spilled thousands of gallons of <strong>crude oil</strong> into New York Harbor.
            </div>
        </div>
        <img src="images/Metal Gear Solid 2 - Sons of Liberty (2001).jpg" alt="Metal Gear Solid 2: Sons of Liberty (2001)">
    </div>
</div>
`;

let gameMetalGearSolid_TheTwinSnakes = `
<div class="container-game remake">
    <button class="collapsible">
        <div class="type">REMAKE</div>
        <div class="title">Metal Gear Solid: The Twin Snakes (2004)</div>
    </button>
    <div class="container-info">
        <div class="info">
            <div class="incident">2005: Shadow Moses Incident</div>
            <div class="text">
                The remake of <strong>Metal Gear Solid (1998)</strong>. The <strong>Shadow Moses Incident</strong> was an armed revolt led by <strong>FOXHOUND</strong> and the <strong>Next-Generation Special Forces</strong> on <strong>Shadow Moses Island</strong>, <strong>Alaska</strong>. Commanded by <strong>Liquid Snake</strong>, they formed the <strong>Sons of Big Boss</strong> and seized a secret nuclear-weapon facility on <strong>February 28, 2005</strong>. FOXHOUND took hostages, including <strong>DARPA chief Donald Anderson</strong> and <strong>ArmsTech president Kenneth Baker</strong>, along with a <strong>soldier</strong> who resisted the uprising.
            </div>
        </div>
        <img src="images/Metal Gear Solid - The Twin Snakes (2004).jpg" alt="Metal Gear Solid: The Twin Snakes (2004)">
    </div>
</div>
`;

let gameMetalGearSolid3_SnakeEater = `
<div class="container-game main">
    <button class="collapsible">
        <div class="type">MAIN</div>
        <div class="title">Metal Gear Solid 3: Snake Eater / Subsistence (2004)</div>
    </button>
    <div class="container-info">
        <div class="info">
            <div class="incident">1964: Operation Snake Eater</div>
            <div class="text">
                Operation <strong>Snake Eater</strong> was a CIA operation conducted in <strong>Tselinoyarsk</strong>, <strong>USSR</strong>, in <strong>August</strong> and <strong>September 1964</strong>. Its objectives were to assassinate <strong>The Boss</strong>, a founding member of the legendary <strong>Cobra Unit</strong> who had defected to the <strong>Soviet Union</strong>, and to neutralize the imminent threat posed by the formidable <strong>Shagohod</strong>, a groundbreaking nuclear-equipped weapon crafted by <strong>Nikolai Stepanovich Sokolov</strong>, who was forced to work on the project under duress by the Soviets.
            </div>
        </div>
        <img src="images/Metal Gear Solid 3 - Snake Eater (2004).jpg" alt="Metal Gear Solid 3: Snake Eater (2004)">
    </div>
</div>
`;

let gameMetalGearSolid_PortableOps = `
<div class="container-game spin-off">
    <button class="collapsible">
        <div class="type">SPIN-OFF</div>
        <div class="title">Metal Gear Solid: Portable Ops (2006)</div>
    </button>
    <div class="container-info">
        <div class="info">
            <div class="incident">1970: San Hieronymo Incident</div>
            <div class="text">
                The <strong>San Hieronymo Incident</strong> unfolded during the period of <strong>November 2</strong> to <strong>December 1970</strong>. Naked Snake's former unit, <strong>FOX</strong>, broke their allegiance with the CIA and went renegade. <strong>Snake</strong> himself was targeted by the FOX unit, which sent armed soldiers to <strong>attack</strong> and <strong>capture</strong> him. He was managed to escape with the assistance of <strong>Roy Campbell</strong>. Together they adeptly managed the <strong>unfolding situation</strong> and <strong>complex challenges</strong>.
            </div>
        </div>
        <img src="images/Metal Gear Solid - Portable Ops (2006).jpg" alt="Metal Gear Solid: Portable Ops (2006)">
    </div>
</div>
`;

let gameMetalGearSolid4_GunsOfThePatriots = `
<div class="container-game main">
    <button class="collapsible">
        <div class="type">MAIN</div>
        <div class="title">Metal Gear Solid 4: Guns of the Patriots (2008)</div>
    </button>
    <div class="container-info">
        <div class="info">
            <div class="incident">2014: Guns of the Patriots Incident</div>
            <div class="text">
                The <strong>Guns of the Patriots Incident</strong>, also known as the <strong>Outer Haven Incident</strong>, was an insurrection mounted against the <strong>Patriots</strong> in <strong>2014</strong> by <strong>Liquid Ocelot</strong>. Possessing both the mind of <strong>Les Enfants Terribles</strong> subject <strong>Liquid Snake</strong>, and the body of <strong>Patriot</strong> agent <strong>Revolver Ocelot</strong>, <strong>Liquid Ocelot</strong> gained control of the world's five largest <strong>private military companies</strong>, combining their might under a single mother company known as <strong>Outer Heaven</strong>.
            </div>
        </div>
        <img src="images/Metal Gear Solid 4 - Guns of the Patriots (2008).jpg" alt="Metal Gear Solid 4: Guns of the Patriots (2008)">
    </div>
</div>
`;

let gameMetalGearSolid_PeaceWalker = `
<div class="container-game main">
    <button class="collapsible">
        <div class="type">MAIN</div>
        <div class="title">Metal Gear Solid: Peace Walker (2010)</div>
    </button>
    <div class="container-info">
        <div class="info">
            <div class="incident">1974: Peace Walker Incident</div>
            <div class="text">
                The <strong>Peace Walker Incident</strong> was a series of intense military clashes between the <strong>CIA</strong> <strong>Peace Sentinel</strong> and the independent mercenary organization <strong>Militaires Sans Frontières (MSF)</strong> from <strong>November 4</strong> to <strong>December 1974</strong>. Primarily unfolding in <strong>Central America</strong>, the conflict revolved around the contentious development of the <strong>Peace Walker Project</strong> by the <strong>Peace Sentinel</strong>, countered by MSF's determined efforts to <strong>prevent</strong> its  completion.
            </div>
        </div>
        <img src="images/Metal Gear Solid - Peace Walker (2010).jpg" alt="Metal Gear Solid: Peace Walker (2010)">
    </div>
</div>
`;

let gameMetalGearRising_Revengeance = `
<div class="container-game spin-off">
    <button class="collapsible">
        <div class="type">SPIN-OFF</div>
        <div class="title">Metal Gear Rising: Revengeance (2013)</div>
    </button>
    <div class="container-info">
        <div class="info">
            <div class="incident">2016 / 2018: World Marshal Incident</div>
            <div class="text">
                The <strong>World Marshal Incident</strong>, widely recognized as the <strong>World Marshal Incidents</strong> or <strong>Raiden's Revengeance</strong>, unfolded during the years <strong>2016</strong> and <strong>early 2018</strong>. This chain of events was triggered by the <strong>assassination</strong> of the <strong>African country's Prime Minister</strong>, <strong>N'mani</strong>. The primary objective of the incident was to <strong>find</strong> the <strong>perpetrators</strong>. <strong>Raiden</strong>, serving as the main operative, embarked on this critical mission, commencing his efforts around  <strong>April 2018</strong>.
            </div>
        </div>
        <img src="images/Metal Gear Rising - Revengeance (2013).jpg" alt="Metal Gear Rising: Revengeance (2013)">
    </div>
</div>
`;

let gameMetalGearSolidV_GroundZeroes = `
<div class="container-game main">
    <button class="collapsible">
        <div class="type">MAIN</div>
        <div class="title">Metal Gear Solid V: Ground Zeroes (2014)</div>
    </button>
    <div class="container-info">
        <div class="info">
            <div class="incident">1975: Ground Zeroes Incident</div>
            <div class="text">
                The <strong>Ground Zeroes Incident</strong> commenced with probing reports suggesting that <strong>Paz Ortega Andrade</strong>, previously thought to be deceased, had indeed <strong>survived</strong> and was being held at <strong>Camp Omega</strong>. <strong>Ricardo "Chico" Valenciano Libre</strong> attempted to rescue her, but his action resulted in his <strong>capture</strong>. On <strong>March 16, 1975</strong>, <strong>Big Boss</strong> was dispatched to <strong>infiltrate</strong> Camp Omega, <strong>extract them</strong> if alive, and <strong>verify</strong> the information they disclosed during captivity.
            </div>
        </div>
        <img src="images/Metal Gear Solid V - Ground Zeroes (2014).jpg" alt="Metal Gear Solid V: Ground Zeroes (2014)">
    </div>
</div>
`;

let gameMetalGearSolidV_ThePhantomPain = `
<div class="container-game main">
    <button class="collapsible">
        <div class="type">MAIN</div>
        <div class="title">Metal Gear Solid V: The Phantom Pain (2015)</div>
    </button>
    <div class="container-info">
        <div class="info">
            <div class="incident">1984: Phantom Pain Incident</div>
            <div class="text">
                The <strong>Phantom Pain Incident</strong> was a series of events in <strong>1984</strong> driven by the eponymous <strong>phantom pain</strong> experienced by its participants, particularly by the two opposing forces – <strong>Big Boss</strong>, the leader of <strong>Diamond Dogs</strong>, and <strong>Skull Face</strong>, the commander of <strong>XOF</strong>. The incident comprised Skull Face's attempt to control the <strong>global military balance of power</strong> and the actions taken by Diamond Dogs to <strong>stop him</strong> in <strong>Afghanistan</strong> and <strong>Central Africa</strong>.
            </div>
        </div>
        <img src="images/Metal Gear Solid V - The Phantom Pain (2015).jpg" alt="Metal Gear Solid V: The Phantom Pain (2015)">
    </div>
</div>
`;

let gameMetalGearSurvive = `
<div class="container-game non-canon">
    <button class="collapsible">
        <div class="type">NON-CANON</div>
        <div class="title">Metal Gear Survive (2018)</div>
    </button>
    <div class="container-info">
        <div class="info">
            <div class="incident">1975: Wormhole</div>
            <div class="text">
                Non-canonical sequel to <strong>MGS V: Ground Zeroes (2014)</strong>. The <strong>Wormhole</strong> situation occurred in <strong>1975</strong>, during which the <strong>Captain</strong>, a former soldier of the <strong>Militaires Sans Frontières</strong>, traveled to the parallel world of <strong>Dite</strong> to <strong>recover</strong> the survivors of an expedition team and their research, enduring both the <strong>hostile environment</strong> and its <strong>inhabitants</strong>. One of his tasks was also to <strong>find</strong> a cure for an infection that occurred when the wormhole infected him earlier.
            </div>
        </div>
        <img src="images/Metal Gear Survive (2018).jpg" alt="Metal Gear Survive (2018)">
    </div>
</div>
`;

let gameMetalGearSolidDelta_SnakeEater = `
<div class="container-game remake">
    <button class="collapsible">
        <div class="type">REMAKE</div>
        <div class="title">Metal Gear Solid Δ: Snake Eater (TBA)</div>
    </button>
    <div class="container-info">
        <div class="info">
            <div class="incident">1964: Operation Snake Eater</div>
            <div class="text">
                The remake of <strong>MGS 3: Snake Eater</strong>. Operation <strong>Snake Eater</strong> was a CIA operation conducted in <strong>Tselinoyarsk</strong>, <strong>USSR</strong>, in <strong>August</strong> and <strong>September 1964</strong>. Its objectives were to assassinate <strong>The Boss</strong>, a founding member of the legendary <strong>Cobra Unit</strong> who had defected to the <strong>Soviet Union</strong>, and to neutralize the imminent threat posed by the formidable <strong>Shagohod</strong>, a groundbreaking nuclear-equipped weapon crafted by <strong>Nikolai Stepanovich Sokolov</strong>, who was forced to work on the project under duress by the Soviets.
            </div>
        </div>
        <img src="images/Metal Gear Solid Δ - Snake Eater (TBA).jpg" alt="Metal Gear Solid Δ: Snake Eater (TBA)">
    </div>
</div>
`;

const footer = `
<hr>

<footer>
    Information sourced from <a href="https://en.wikipedia.org/wiki/Metal_Gear" target="_blank">Wikipedia</a> and <a href="https://metalgear.fandom.com/wiki/Metal_Gear_Wiki" target="_blank">Metal Gear Fandom</a>.
</footer>
`;
