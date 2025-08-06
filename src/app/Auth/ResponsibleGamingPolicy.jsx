import MoveBack from "../../components/MoveBack";
import PropTypes from "prop-types";

export default function ResponsibleGamingPolicy() {
  return (
    <div className="bg-bgBody min-h-screen w-full px-2">
      <MoveBack />

      <div className="max-w-4xl mx-auto rounded-xl shadow-lg px-6 pb-20">
        <h4 className="text-lg font-extrabold text-white mb-6 border-b border-gray-600 pb-4">
          Ganjibets Responsible Gaming Policy
        </h4>

        <div className="space-y-6 leading-relaxed text-sm sm:text-base text-white">
          <Section title="1. Introduction">
            <p>
              Ganjibets is committed to providing an entertaining and safe
              online betting environment for all users. As part of our social
              responsibility, we have implemented a comprehensive Responsible
              Gaming Policy to promote responsible betting behavior, prevent
              underage gambling, and support individuals who may experience
              problems related to gambling.
            </p>
            <p>
              This policy outlines the principles, tools, and support mechanisms
              available to help users maintain control over their betting
              activities.
            </p>
          </Section>

          <Section title="2. Our Commitment">
            <p>
              Ganjibets, owned and operated by Telora Technologies Limited, a
              company registered in Kenya with its office located at Rosslyn
              Square Luxury Mall, Redhill Road, Nairobi, upholds responsible
              gaming as a fundamental value of its operations. We are licensed
              and committed to compliance with all applicable legal and
              regulatory frameworks governing betting and consumer protection.
            </p>
          </Section>

          <Section title="3. Underage Gambling">
            <p>
              Ganjibets strictly prohibits access to its betting services by
              individuals under the age of 18.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                We implement age verification mechanisms during account
                registration.
              </li>
              <li>
                Any account found to be operated by a minor will be immediately
                closed, and all associated bets voided.
              </li>
              <li>
                Parents and guardians are encouraged to use content control
                software to restrict access to gambling websites on minors’
                devices.
              </li>
            </ul>
          </Section>

          <Section title="4. Recognizing Problem Gambling">
            <p>
              While most customers enjoy betting as entertainment, we recognize
              that for some, it can lead to serious problems. Warning signs may
              include:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Gambling beyond one’s means or chasing losses</li>
              <li>Borrowing money or selling possessions to fund betting</li>
              <li>
                Neglecting work, family, or social obligations due to gambling
              </li>
              <li>Lying about gambling activities</li>
              <li>
                Feelings of anxiety, depression, or distress linked to gambling
                behavior
              </li>
            </ul>
            <p>
              We urge customers to evaluate their gaming behavior and seek help
              if they notice such signs.
            </p>
          </Section>

          <Section title="5. Responsible Gaming Tools">
            <p>
              To promote safe betting, Ganjibets offers the following player
              protection tools:
            </p>

            <h3 className="font-semibold mt-2">a) Deposit Limits</h3>
            <p>
              Users can set daily, weekly, or monthly deposit limits. Increases
              will have a cooling-off period.
            </p>

            <h3 className="font-semibold mt-2">b) Session Limits</h3>
            <p>
              Customers can set time limits to manage the duration of their
              sessions.
            </p>

            <h3 className="font-semibold mt-2">c) Self-Exclusion</h3>
            <p>
              Users may request temporary or permanent exclusion. During
              exclusion:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>The account will be suspended.</li>
              <li>Marketing communications will be disabled.</li>
              <li>
                Access is restored only upon written request, subject to review.
              </li>
            </ul>

            <h3 className="font-semibold mt-2">d) Account Closure</h3>
            <p>Users can request account closure anytime via support.</p>
          </Section>

          <Section title="6. Support for Affected Individuals">
            <p>
              If you or someone you know is struggling with gambling, we
              encourage seeking professional help. Organizations that offer
              confidential assistance:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <a
                  href="https://gamblersanonymous.or.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-400"
                >
                  Gamblers Anonymous Kenya
                </a>
              </li>
              <li>
                <a
                  href="https://www.kapc.or.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-400"
                >
                  Kenya Association of Professional Counsellors
                </a>
              </li>
            </ul>
            <p>
              Our support team is trained to provide guidance and referrals to
              such services.
            </p>
          </Section>

          <Section title="7. Staff Training and Internal Monitoring">
            <p>
              All Ganjibets staff receive training on responsible gaming and
              identifying problematic patterns. We also monitor player activity
              and may intervene if necessary.
            </p>
          </Section>

          <Section title="8. Marketing and Advertising Ethics">
            <p>Our marketing complies with ethical standards and:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Does not target users under 18</li>
              <li>
                Does not promote gambling as a solution to financial
                difficulties
              </li>
              <li>Presents betting as entertainment, not income</li>
            </ul>
          </Section>

          <Section title="9. Contact Us">
            <p>
              To activate any responsible gaming tools or for support, please
              contact us via:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Live Chat – Available at <strong>www.ganjibets.com</strong>
              </li>
              <li>
                Email – <strong>support@ganjibets.com</strong>
              </li>
            </ul>
          </Section>

          <Section title="10. Policy Review">
            <p>
              This Responsible Gaming Policy is reviewed regularly to ensure it
              remains effective, relevant, and compliant with best practices and
              legal obligations.
            </p>

            <p className="text-sm mt-4">
              <strong>Telora Technologies Limited</strong>
              <br />
              Rosslyn Square Luxury Mall, Redhill Road, Nairobi, Kenya
              <br />
              Website: <strong>www.ganjibets.com</strong>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="space-y-3 border-t border-gray-700 pt-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
