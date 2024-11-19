//Note: try to fix the invalid size css value

const AboutUsComp = () => {
  return (
    <div className="AboutUsComp">
      <section className="AboutTheGame TransparentContainer">
        <header className="AboutTheGameHeader">
          <img src="./back.svg" alt="Back Icon" className="BackIcon" />
          <p>About Us</p>
        </header>
        <p className="AboutTheGameBody">
          <strong>DrumsSet</strong> is a Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Atque ipsum non voluptatum illo ab quis, sapiente
          ullam assumenda modi nisi veritatis quidem distinctio aut! Nihil
          sapiente eius architecto. Debitis, non.
        </p>
      </section>
      <section className="ToolsAndFrameworks TransparentContainer">
        <p className="ToolsHeader">Tools & Frameworks Used</p>
        <div className="ToolsLogos">
          <a href="https://www.figma.com/ui-design-tool/" target="_blank">
            <img src="./Figma.svg" alt="Figma Logo" className="ToolLogo" />
          </a>
          <a href="https://code.visualstudio.com/" target="_blank">
            <img src="./VS Code.svg" alt="VS Code Logo" className="ToolLogo" />
          </a>
          <a href="https://react.dev/" target="_blank">
            <img src="./react.svg" alt="React Logo" className="ToolLogo" />
          </a>
          <a href="https://vite.dev/" target="_blank">
            <img src="./vite.svg" alt="Vite Logo" className="ToolLogo" />
          </a>
        </div>
      </section>
      <section className="Contributers TransparentContainer">
        <p className="ContributersHeader">Our Humble Team</p>
        <div className="ContributersImages">
          <a href="https://github.com/EngHussam23" target="_blank">
            <img
              src="./Profile Avatar.svg"
              alt="Team Member Image"
              className="TeamMemberImage"
            />
          </a>
          <a href="https://github.com/EngHussam23" target="_blank">
            <img
              src="./Profile Avatar.svg"
              alt="Team Member Image"
              className="TeamMemberImage"
            />
          </a>
          <a href="https://github.com/EngHussam23" target="_blank">
            <img
              src="./Profile Avatar.svg"
              alt="Team Member Image"
              className="TeamMemberImage"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUsComp;
