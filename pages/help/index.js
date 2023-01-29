// our-domain.com/help
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { IoIosArrowDown } from "react-icons/Io";
import { NavBar } from "../../components/NavBar";
import { HeaderRow } from "../../components/HeaderRow";
import styles from "./helpStyles.module.css";

function HelpPage() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <NavBar />
      <HeaderRow title={"FAQ"} />
      <div className={styles.mainContainer}>
        <div className={styles.accordionWrapper}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<IoIosArrowDown />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <p
                className={styles.accordionPointHeader}
              >{`Where is this data from?`}</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>These are from different REST APIs</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<IoIosArrowDown />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <p
                className={styles.accordionPointHeader}
              >{`My favorite player isn't here`}</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>Try searching their last name</p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<IoIosArrowDown />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <p className={styles.accordionPointHeader}>
                What is this made in?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Next.js is used for routing and for trying out the client side
                rendering
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<IoIosArrowDown />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <p className={styles.accordionPointHeader}>
                What are the future plans for the site?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p>Finding better APIs for more complex searches and filters</p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default HelpPage;
