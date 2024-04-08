import React from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./styles/FAQ.css";

const MythicalMunchiesFAQ = () => {
  return (
    <div className="gold-background">
      <Link to="/" className="back-button">
        Back
      </Link>

      <div className="title">
        <h2>Mythical Munchies FAQ </h2>
      </div>
      <div className="sub-text">
        <h4>
          Welcome to Mythical Munchies, where we bring legendary flavors to your
          plate! Below are some frequently asked questions about our mythical
          recipes, reviews, and e-commerce adventures. Don't worry, no dragons
          were harmed in the making of these answers.
        </h4>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">
            Q: Are your recipes really inspired by mythical literature and film?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h7">
            Absolutely! We take inspiration from creatures of legend to craft
            recipes that are as magical as they are delicious. From unicorn
            cupcakes to dragon-fire chili, our culinary creations are sure to
            enchant your taste buds.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6">
            Are the ingredients difficult to find?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h7">
            Are the ingredients difficult to find?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">Are your recipes safe to eat?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h7">
            Of course! We take food safety very seriously here at Mythical
            Munchies. Our recipes undergo rigorous testing by both mortal and
            immortal taste testers to ensure that they're not only delicious but
            also safe for consumption. However, we cannot be held responsible
            for any unexpected side effects, such as temporary invisibility or
            spontaneous levitation.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography variant="h6">
            Can I leave a review of your recipes?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h7">
            Absolutely! We love hearing from our fellow mythical foodies.
            Whether you've successfully summoned a delicious feast or
            encountered a hiccup along the way, we welcome all feedback with
            open arms.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography variant="h6">Do you ship internationally?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h7">
            While we'd love to spread our mythical munchies to every corner of
            the globe, we currently only ship to select realms and dimensions.
            However, if you're willing to trade us a portal to your world in
            exchange for some enchanted cookies, we might be able to work
            something out.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography variant="h6">
            {" "}
            Do you offer discounts for wizards, witches, and other magical
            beings?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h7">
            While we believe that everyone deserves a taste of magic, we
            unfortunately cannot offer discounts based on magical status alone.
            However, keep an eye out for special promotions and sales that may
            sprinkle a little extra enchantment into your shopping experience.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography variant="h6">
            Are your e-commerce transactions secure?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h7">
            Rest assured, your transactions are as secure as the vaults of
            Olympus. We use the latest magical encryption spells to protect your
            information and ensure that your shopping experience is as safe as
            it is enjoyable. Plus, every purchase comes with a free charm to
            ward off pesky internet trolls.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography variant="h6">
            Can I request or add a custom recipe?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h7">
            Absolutely! We love getting creative with our culinary concoctions.
            Whether you're craving a dish fit for a siren's song or a potion to
            rival Merlin's magic, just let us know your desires, and we'll work
            our culinary wizardry to make it happen.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div>
        <div>
          <h4 className="sub-text">
            We hope this FAQ has answered all of your burning questions about
            Mythical Munchies. If you have any further inquiries, feel free to
            summon us using the enchanted contact form on our website. Happy
            munching, and may your meals be as legendary as the creatures that
            inspire them!
          </h4>
        </div>
      </div>
    </div>
  );
};
export default MythicalMunchiesFAQ;
