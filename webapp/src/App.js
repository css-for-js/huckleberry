import React from "react";
import "./App.scss";
import styled from "styled-components";

const BylineGreenSpan = styled.span`
  color: hsl(160deg, 100%, 30%);
`

const App =  () => {

    return (
      <div id="root">
        <div id="pageContainer">
        <div className="introChunk">
          <h1 id="introChunkTitle">Huckleberry</h1>
          <p id="introParaOne">
            An avant-garde agency focused on connecting 
            <BylineGreenSpan className="byline-green"> passion</BylineGreenSpan> with <BylineGreenSpan>logistics</BylineGreenSpan>.
          </p>

          <p id="introParaTwo">A better way to solve the problems of tomorrow.</p>
        </div>
    <main id="mainContent">
      <section class="max-width-wrapper">
        <div class="card">
          <h2 class="mainContentHeading">
            Wealth comes from operations
          </h2>
          <p>
            No modern business can thrive without developing a
            specialization in operations. <em>Huckleberry</em> has
            helped dozens of companies, from Fortune 50 monoliths to
            fast-growing Bay Area startups, achieve their goals and
            meet their KPIs by leveraging our extensive network of
            logistics experts.
          </p>
          <p>
            <em>Huckleberry</em> was established in 2003 to help
            ambitious businesses discover their true potential. If
            that resonates, let's chat. ☎
          </p>
        </div>
      </section>
    </main>
    </div>
    </div>
    )
}


export default App;