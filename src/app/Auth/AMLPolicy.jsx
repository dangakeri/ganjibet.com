import MoveBack from "../../components/MoveBack";
import PropTypes from "prop-types";

export default function AMLPolicy() {
  return (
    <div className="bg-bgBody min-h-screen w-full px-2">
      <MoveBack />
      <div className="max-w-4xl mx-auto rounded-xl shadow-lg px-6 pb-20">
        <h4 className="text-lg font-extrabold text-white mb-6 border-b border-gray-600 pb-4">
          Ganjibets Anti-Money Laundering (AML) Policy
        </h4>

        <div className="space-y-6 leading-relaxed text-sm sm:text-base text-white">
          <Section title="1. Introduction">
            <p>
              This Anti-Money Laundering (“AML”) Policy sets out the principles
              and procedures adopted by Ganjibets (
              <strong>www.ganjibets.com</strong>), a betting platform owned and
              operated by Telora Technologies Limited, a company duly registered
              in Kenya with its principal place of business at Rosslyn Square
              Luxury Mall, Redhill Road, Nairobi.
            </p>
            <p>
              This Policy ensures compliance with relevant laws such as the
              Proceeds of Crime and Anti-Money Laundering Act (POCAMLA) and
              other regulatory frameworks in Kenya.
            </p>
          </Section>

          <Section title="2. Purpose">
            <ul className="list-disc list-inside space-y-1">
              <li>
                Prevent Ganjibets from being used as a channel for money
                laundering or terrorist financing;
              </li>
              <li>
                Establish clear internal procedures to detect and report
                suspicious activity;
              </li>
              <li>
                Promote a culture of compliance and integrity across all
                operations;
              </li>
              <li>
                Comply with legal and regulatory obligations in Kenya and other
                applicable jurisdictions.
              </li>
            </ul>
          </Section>

          <Section title="3. Scope">
            <ul className="list-disc list-inside space-y-1">
              <li>
                All Ganjibets employees, consultants, agents, and contractors;
              </li>
              <li>
                All customers registered and transacting on the Ganjibets
                platform;
              </li>
              <li>All transactions via online or associated channels.</li>
            </ul>
          </Section>

          <Section title="4. Customer Due Diligence (CDD)">
            <h3 className="font-semibold mt-2">4.1 Identity Verification</h3>
            <p>
              Customers must submit valid government-issued identification (ID,
              passport, etc.) during registration.
            </p>

            <h3 className="font-semibold mt-4">
              4.2 Know Your Customer (KYC) Measures
            </h3>
            <p>We collect and verify:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Full name, date of birth</li>
              <li>National ID or passport number</li>
              <li>Address and contact details</li>
              <li>Source of funds where required</li>
            </ul>

            <h3 className="font-semibold mt-4">
              4.3 Enhanced Due Diligence (EDD)
            </h3>
            <p>For high-risk customers (e.g., large transactions, PEPs):</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Additional documentation is required</li>
              <li>Ongoing activity monitoring</li>
              <li>Managerial approval for business relationships</li>
            </ul>
          </Section>

          <Section title="5. Ongoing Monitoring">
            <p>We actively monitor for suspicious behavior using:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Automated flags for large or structured transactions</li>
              <li>Manual reviews by compliance officers</li>
              <li>Periodic risk assessments of accounts</li>
            </ul>
          </Section>

          <Section title="6. Reporting Obligations">
            <h3 className="font-semibold mt-2">
              6.1 Suspicious Transaction Reports (STRs)
            </h3>
            <p>
              Suspected cases of money laundering or terrorism financing will be
              reported to the Financial Reporting Centre (FRC).
            </p>

            <h3 className="font-semibold mt-4">6.2 Internal Escalation</h3>
            <p>
              Employees must report suspicious activity to the AML Compliance
              Officer immediately for investigation and follow-up.
            </p>
          </Section>

          <Section title="7. Record Keeping">
            <p>We maintain records of:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Customer identity documents</li>
              <li>Transaction history</li>
              <li>AML-related communications</li>
              <li>Reports submitted to regulators</li>
            </ul>
            <p>
              Records are stored for a minimum of 7 years or as required by law.
            </p>
          </Section>

          <Section title="8. Training and Awareness">
            <p>All staff receive regular AML training to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Understand legal frameworks</li>
              <li>Identify suspicious behavior</li>
              <li>Follow proper reporting protocols</li>
            </ul>
          </Section>

          <Section title="9. Risk-Based Approach">
            <p>We apply a risk-based AML model by:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Identifying high-risk profiles and jurisdictions</li>
              <li>Applying enhanced controls proportionally</li>
              <li>
                Reviewing and adapting assessments based on emerging risks
              </li>
            </ul>
          </Section>

          <Section title="10. AML Compliance Officer">
            <p>
              Ganjibets has appointed a qualified AML Compliance Officer to:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Implement and oversee this Policy</li>
              <li>Ensure regulatory compliance</li>
              <li>Act as liaison with authorities</li>
              <li>Coordinate staff training</li>
              <li>Update the policy annually or as needed</li>
            </ul>
          </Section>

          <Section title="11. Customer Cooperation">
            <p>By using Ganjibets, customers agree to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Provide truthful and accurate information</li>
              <li>Comply with all verification requests</li>
              <li>Avoid unlawful or suspicious activity</li>
            </ul>
            <p>Non-compliance may result in:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Account suspension or closure</li>
              <li>Freezing of funds</li>
              <li>Reports to legal authorities</li>
            </ul>
          </Section>

          <Section title="12. Support and Inquiries">
            <p>For any AML-related inquiries, customers may contact:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Live Chat – available on our website</li>
              <li>
                Email – <strong>support@ganjibets.com</strong>
              </li>
            </ul>
          </Section>

          <Section title="13. Amendments to this Policy">
            <p>
              Ganjibets may amend this AML Policy at any time in line with
              legal, regulatory, or business developments. The latest version
              will always be available at <strong>www.ganjibets.com</strong>.
            </p>

            <p className="text-sm mt-4">
              <strong>Telora Technologies Limited</strong>
              <br />
              Rosslyn Square Luxury Mall, Redhill Road, Nairobi, Kenya
              <br />
              Website: <strong>www.ganjibets.com</strong>
              <br />
              Email: <strong>support@ganjibets.com</strong>
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
