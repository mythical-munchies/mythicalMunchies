import React from "react";
import "./styles/PrivacyPolicy.css";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="background-gold">
      <div className="back-button">
        <Link to="/">Back</Link>
      </div>
      <div className="policy">
        <div className="title"> Privacy Policy</div>
        <h2>
          Welcome to Mythical Munchies, where magic meets mouth-watering meals!
          At Mythical Munchies, we value your privacy as much as we value our
          secret recipe for phoenix feather pie. This Privacy Policy outlines
          how we collect, use, and protect your information while you embark on
          your culinary adventures with us.
        </h2>

        <h3>1. What We Collect</h3>
        <ul>
          <li>
            Magical Ingredients: When you browse our website or place an order
            for enchanted treats, we may collect information such as your name,
            email address, shipping address, and payment details. Don't worry,
            we won't use your info to summon any unexpected guests to your
            doorstep!
          </li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <ul>
          <li>
            Cooking Up Delights: We use the information you provide to fulfill
            your orders and deliver magical morsels right to your door. Your
            details help us ensure that your mythical munchies reach you in a
            timely and tasty manner.
          </li>
          <li>
            Magical Communication: We may occasionally send you emails or
            messages to keep you updated on our latest culinary creations,
            special promotions, or mythical events. But fear not, we won't flood
            your inbox like a burst damsel in distress!
          </li>
        </ul>

        <h3>3. Protection of Your Information</h3>
        <ul>
          <li>
            Your privacy is as sacred to us as the hidden treasure of a
            leprechaun's pot of gold. We employ magical encryption spells and
            protective charms to safeguard your information from prying eyes and
            mischievous trolls.
          </li>
        </ul>

        <h3>4. Sharing Your Information</h3>
        <ul>
          <li>
            We may share your information with trusted partners, such as
            delivery services or suppliers, to ensure that your mythical
            munchies journey safely from our kitchen to yours. Rest assured,
            we'll only share what's necessary to fulfill your orders and spread
            the magic of our culinary creations.
          </li>
        </ul>

        <h3>5. Your Choices and Rights</h3>
        <ul>
          <li>
            Magical Opt-Out: If you wish to opt-out of receiving our enchanting
            emails and updates, you can let us know, and we'll respect your
            wishes faster than a phoenix rising from the ashes.
          </li>
          <li>
            Spell of Access: You have the right to access, update, or delete the
            information we hold about you. Just wave your wand (or update your
            account/drop us a message), and we'll make it happen.
          </li>
        </ul>

        <h3>6. Cookies and Other Spells</h3>
        <ul>
          <li>
            Like most magical websites, we use cookies to enhance your browsing
            experience and tailor our offerings to suit your tastes. These
            cookies don't contain any hidden potions or spells, just helpful
            information to make your visit more enchanting.
          </li>
        </ul>
        <h3>7. Children's Privacy</h3>
        <ul>
          <li>
            Mythical Munchies is open to wizards, witches, and magical beings of
            all ages! However, if you're under the age of 13, please make sure
            to seek permission from your parents or guardians before placing any
            orders or sharing your information with us.
          </li>
        </ul>

        <h3>8. Changes to this Privacy Policy</h3>
        <ul>
          <li>
            Just as magic is ever-changing, so too may our Privacy Policy evolve
            over time. We'll update you with any significant changes, so you can
            continue to enjoy your mythical munchies with peace of mind.
          </li>
        </ul>

        <h3>9. Contact Us</h3>
        <ul>
          <li>
            If you have any questions, concerns, or spells to share, don't
            hesitate to reach out to our mystical team. We're here to ensure
            your mythical munchies experience is as delightful as a fairy's
            dance in the moonlight.
          </li>
        </ul>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
