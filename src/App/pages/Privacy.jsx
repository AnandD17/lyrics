import React from 'react'
import { SearchBar } from '../components/SearchBar'
import { ButtonHeader } from '../components/ButtonHeader'
import { Helmet } from 'react-helmet';


export const Privacy = (props) => {
    return (
        <div className='Privacy h-full w-full overflow-hidden dark:bg-[#2C2C2C]'>
            <Helmet>
                <title> Privacy | Revaltronics</title>
            </Helmet>

            <div className="lg:h-[10%] sm:h-[30%] h-[23%]">

                <SearchBar toggleSideBar={() => { props.toggleSideBar() }} />
            </div>

            <div className='overflow-auto lg:h-[90%] sm:h-[70%] h-[77%] bg-[#FBFBFB] px-6 pb-5 dark:bg-[#2C2C2C]'>
                <div className='flex justify-start my-5'>
                    <ButtonHeader title={'Privacy'} />
                </div>
                <div className='text-justify dark:text-[#FAF9F6] dark:bg-[#2C2C2C] bg-[#FFFFFF] p-4 rounded-[5px]'>
                    <div className='font-bold'>
                        1. Introduction
                    </div>
                    <br />
                    <div className='font-light'>
                        Welcome to <b className='font-bold'> RevAltronics. </b>
                        RevAltronics (“us”, “we”, or “our”) operates <b className='font-bold'> revaltronics.com </b>  (hereinafter referred to as “Service”).
                        Our Privacy Policy governs your visit to <b className='font-bold'> revaltronics.com </b> and explains how we collect, safeguard and disclose information that results from your use of our Service.
                        We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.
                        Our Terms and Conditions (“<b className='font-bold'>Terms</b>”) govern all use of our Service and together with the Privacy Policy constitutes your agreement with us (“agreement<b className='font-bold'>agreement</b>”).
                    </div>
                    <br /><br />


                    <div className='font-bold'>
                        2.Definition
                    </div>
                    <br />
                    <div className='font-light'>
                        <b className='font-bold'>SERVICE</b>  means the revaltronics.com website operated by RevAltronics.
                        <br />
                        <b className='font-bold'>PERSONAL DATA</b>  means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).
                        <br />
                        <b className='font-bold'>USAGE DATA</b>   is data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit).
                        <br />
                        <b className='font-bold'>COOKIES</b>  are small files stored on your device (computer or mobile device).
                        <br />
                        <b className='font-bold'>DATA CONTROLLER</b> means a natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data.
                        <br />
                        <b className='font-bold'>DATA PROCESSORS (OR SERVICE PROVIDERS)</b> means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.
                        <br />
                        <b className='font-bold'>DATA SUBJECT </b> is any living individual who is the subject of Personal Data.
                        <br />
                        <b className='font-bold'>THE USER</b> is the individual using our Service. The User corresponds to the Data Subject, who is the subject of Personal Data.

                        <br />
                    </div><br /><br />
                    <div className='font-bold'>
                        3. Information Collection and Use
                    </div>
                    <br />
                    <div>
                        We collect several different types of information for various purposes to provide and improve our Service to you.

                    </div>
                    <br /><br />
                    <div className='font-bold'>
                        4. Types of Data Collected
                    </div>
                    <br />
                    <div className='font-bold'>
                        Personal Data
                    </div>
                    <br />
                    <div>
                        While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“<b className='font-bold'>Personal Data</b>”). Personally identifiable information may include, but is not limited to:
                    </div>
                    <br />
                    <div className=''>
                        0.1. Email address
                    </div>
                    <br />
                    <div className=''>
                        0.2. First name and last name
                    </div>
                    <br />
                    <div className=''>
                        0.3. Phone number
                    </div>
                    <br />
                    <div className=''>
                        0.4. Address, Country, State, Province, ZIP/Postal code, City
                    </div>
                    <br />
                    <div className=''>
                        0.5. Cookies and Usage Data
                    </div>
                    <br />
                    <div>
                        We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link.
                    </div>
                    <br /><br />
                    <div className="font-bold">
                        Usage Data
                    </div>
                    <br />
                    <div>
                        We may also collect information that your browser sends whenever you visit our Service or when you access Service by or through any device (“Usage Data”).
                    </div>
                    <br />
                    <div>
                        This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                    </div>
                    <br />
                    <div>
                        When you access Service with a device, this Usage Data may include information such as the type of device you use, your device unique ID, the IP address of your device, your device operating system, the type of Internet browser you use, unique device identifiers and other diagnostic data
                    </div>

                    <br /><br />

                    <div className='font-bold'>Tracking Cookies Data</div>
                    <br />
                    <div>
                        We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.
                    </div><br />
                    <div>
                        Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service.
                    </div><br />
                    <div>
                        Examples of Cookies we use:
                    </div><br />
                    <div>
                        <b className="font-bold">0.1. Session Cookies: </b>We use Session Cookies to operate our Service.
                    </div>
                    <br />
                    
                    <div>
                        <b className="font-bold">0.2. Preference Cookies: </b>We use Preference Cookies to remember your preferences and various settings.


                    </div>
                    <br />

                    <div>
                        <b className="font-bold">0.3. Security Cookies: </b> We use Security Cookies for security purposes.
                    </div>
                    <br />

                    <div>
                        <b className="font-bold">0.4. Advertising Cookies: </b> Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.
                    </div>
                    <br />
                    <div className="font-bold">Other Data</div>
                    <br />
                    <div>
                    While using our Service, we may also collect the following information: sex, age, date of birth, place of birth, passport details, citizenship, registration at place of residence and actual address, telephone number (work, mobile), details of documents on education, qualification, professional training, employment agreements, <a className='text-underline text-[blue]' href="https://policymaker.io/non-disclosure-agreement/">NDA agreements</a> , information on bonuses and compensation, information on marital status, family members, social security (or other taxpayer identification) number, office location and other data.
                    </div>
                    <br /><br />
                    <div className="font-bold">
                    5. Use of Data
                    </div>
                    <div>
                    RevAltronics uses the collected data for various purposes:
                    </div>
                    <br />
                    <div>
                    0.1. to provide and maintain our Service;
                    </div>
                    <br />
                    <div>
                    0.2. to notify you about changes to our Service;
                    </div>
                    <br />
                    <div>
                    0.3. to allow you to participate in interactive features of our Service when you choose to do so;
                    </div>
                    <br />
                    <div>
                    0.4. to provide customer support;
                    </div>
                    <br />
                    <div>
                    0.5. to gather analysis or valuable information so that we can improve our Service;
                    </div>
                    <br />
                    <div>
                    0.6. to monitor the usage of our Service;
                    </div>
                    <br />
                    <div>
                    0.7. to detect, prevent and address technical issues;
                    </div>
                    <br />
                    <div>
                    0.8. to fulfil any other purpose for which you provide it;
                    </div>
                    <br />
                    <div>
                    0.9. to carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;
                    </div>
                    <br />
                    <div>
                    0.10. to provide you with notices about your account and/or subscription, including expiration and renewal notices, email-instructions, etc.;
                    </div>
                    <br />
                    <div>
                    0.11. to provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information;
                    </div>
                    <br />
                    <div>
                    0.12. in any other way we may describe when you provide the information;
                    </div>
                    <br />
                    <div>
                    0.13. for any other purpose with your consent.
                    </div>
                    <br /><br />
                    <div className="font-bold">
                    6. Retention of Data
                    </div>
                    <br />
                    <div>
                    We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                    </div>
                    <br />
                    <div>
                    We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.
                    </div>

                    <br /><br />

                    <div className="font-bold">
                    7. Transfer of Data
                    </div>
                    <br />
                    <div>
                    Your information, including Personal Data, may be transferred to – and maintained on – computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
                    </div>
                    <br />
                    <div>
                    If you are located outside India and choose to provide information to us, please note that we transfer the data, including Personal Data, to India and process it there.
                    </div>
                    <br />
                    <div>
                    Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                    </div>
                    <br />
                    <div>
                    RevAltronics will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.
                    </div>
                    

                    <br /><br />

                    <div className='font-bold'>
                    8. Disclosure of Data
                    </div>
                    <br />
                    <div>
                    We may disclose personal information that we collect, or you provide:
                    </div>
                    <br />
                    <div className="font-bold">
                    0.1. Disclosure for Law Enforcement.
                    </div>
                    <br />
                    <div>
                    Under certain circumstances, we may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities.

                    </div>
                    <br />
                    <div className="font-bold">
                    0.2. Business Transaction.
                    </div>
                    <br />
                    <div>
                    If we or our subsidiaries are involved in a merger, acquisition or asset sale, your Personal Data may be transferred.

                    </div>
                    <br />
                    <div className="font-bold">
                    0.3. Other cases. We may disclose your information also:
                    </div>
                    <br />
                    <div>
                    0.3.1. to our subsidiaries and affiliates;
                    </div>
                    <br />
                    <div>
                    0.3.2. to contractors, service providers, and other third parties we use to support our business;
                    </div>
                    <br />
                    <div>
                    0.3.3. to fulfill the purpose for which you provide it;
                    </div>
                    <br />
                    <div>
                    0.3.4. for the purpose of including your company’s logo on our website;
                    </div>
                    <br />
                    <div>
                    0.3.5. for any other purpose disclosed by us when you provide the information;
                    </div>
                    <br />
                    <div>
                    0.3.6. with your consent in any other cases;
                    </div>
                    <br />
                    <div>
                    0.3.7. if we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others.
                    </div>


                    <br /><br />

                    <div className="font-bold">
                    9. Security of Data
                    </div>
                    <br />
                    <div>
                    The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                    </div>

                    <br /><br />

                    <div className="font-bold">
                    10. Your Data Protection Rights Under General Data Protection Regulation (GDPR)
                    </div>
                    <br />
                    <div>
                    If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR.
                    </div>
                    <br />
                    <div>
                    We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
                    </div>
                    <br />
                    <div>
                    If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please email us at <b className='font-bold'>hello@revaltronics.com</b>.
                    </div>
                    <br />
                    <div>
                    In certain circumstances, you have the following data protection rights:
                    </div>
                    <br />
                    <div>
                    0.1. the right to access, update or to delete the information we have on you;
                    </div>
                    <br />
                    <div>
                    0.2. the right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete;
                    </div>
                    <br />
                    <div>
                    0.3. the right to object. You have the right to object to our processing of your Personal Data;
                    </div>
                    <br />
                    <div>
                    0.4. the right of restriction. You have the right to request that we restrict the processing of your personal information;
                    </div>
                    <br />
                    <div>
                    0.5. the right to data portability. You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format;
                    </div>
                    <br />
                    <div>
                    0.6. the right to withdraw consent. You also have the right to withdraw your consent at any time where we rely on your consent to process your personal information;
                    </div>
                    <br />
                    <div>
                    Please note that we may ask you to verify your identity before responding to such requests. Please note, we may not able to provide Service without some necessary data.
                    </div>
                    <br />
                    <div>
                    You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).
                    </div>

                    <br /><br />

                    <div className="font-bold">
                    11. Your Data Protection Rights under the California Privacy Protection Act (CalOPPA)
                    </div>
                    <br />
                    <div>
                    CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law’s reach stretches well beyond California to require a person or company in the United States (and conceivable the world) that operates websites collecting personally identifiable information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals with whom it is being shared, and to comply with this policy.
                    </div>
                    <br />
                    <div>
                    According to CalOPPA we agree to the following:
                    </div>
                    <br />
                    <div>
                    0.1. users can visit our site anonymously;
                    </div>
                    <br />
                    <div>
                    0.2. our Privacy Policy link includes the word “Privacy”, and can easily be found on the home page of our website;
                    </div>
                    <br />
                    <div>
                    0.3. users will be notified of any privacy policy changes on our Privacy Policy Page;
                    </div>
                    <br />
                    <div>
                    0.4. users are able to change their personal information by emailing us at <br /> <b className='font-bold'>  hello@revaltronics.com. </b>
                    </div>
                    <br />
                    <div>
                    Our Policy on “Do Not Track” Signals
                    </div>
                    <br />
                    <div>
                    We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place. Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.
                    </div>
                    <br />
                    <div>
                    You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser
                    </div>

                    <br /><br />

                    <div className="font-bold">
                    12. Your Data Protection Rights under the California Consumer Privacy Act (CCPA)
                    </div>
                    <br />
                    <div>
                    If you are a California resident, you are entitled to learn what data we collect about you, ask to delete your data and not to sell (share) it. To exercise your data protection rights, you can make certain requests and ask us:
                    </div>
                    <br />
                    <div className="font-bold">
                    0.1. What personal information we have about you. If you make this request, we will return to you:
                    </div>
                    <br />
                    <div>
                    0.0.1. The categories of personal information we have collected about you.
                    </div>
                    <br />
                    <div>
                    0.0.2. The categories of sources from which we collect your personal information.
                    </div>
                    <br />
                    <div>
                    0.0.3. The business or commercial purpose for collecting or selling your personal information.
                    </div>
                    <br />
                    <div>
                    0.0.4. The categories of third parties with whom we share personal information.
                    </div>
                    <br />
                    <div>
                    0.0.5. The specific pieces of personal information we have collected about you.
                    </div>
                    <br />
                    <div>
                    0.0.6. A list of categories of personal information that we have sold, along with the category of any other company we sold it to. If we have not sold your personal information, we will inform you of that fact.
                    </div>
                    <br />
                    <div>
                    0.0.7. A list of categories of personal information that we have disclosed for a business purpose, along with the category of any other company we shared it with.
                    </div>
                    <br />
                    <div>
                    Please note, you are entitled to ask us to provide you with this information up to two times in a rolling twelve-month period. When you make this request, the information provided may be limited to the personal information we collected about you in the previous 12 months.
                    </div>
                    <br />
                    <div className="font-bold">
                    0.2. To delete your personal information. If you make this request, we will delete the personal information we hold about you as of the date of your request from our records and direct any service providers to do the same. In some cases, deletion may be accomplished through de-identification of the information. If you choose to delete your personal information, you may not be able to use certain functions that require your personal information to operate.
                    </div>
                    <br />
                    <div className="font-bold">
                    0.3. To stop selling your personal information. We don’t sell or rent your personal information to any third parties for any purpose. We do not sell your personal information for monetary consideration. However, under some circumstances, a transfer of personal information to a third party, or within our family of companies, without monetary consideration may be considered a “sale” under California law. You are the only owner of your Personal Data and can request disclosure or deletion at any time.
                    </div>
                    <br />
                    <div>
                    If you submit a request to stop selling your personal information, we will stop making such transfers.
                    </div>
                    <br />
                    <div>
                    Please note, if you ask us to delete or stop selling your data, it may impact your experience with us, and you may not be able to participate in certain programs or membership services which require the usage of your personal information to function. But in no circumstances, we will discriminate against you for exercising your rights.
                    </div>
                    <br />
                    <div>
                    To exercise your California data protection rights described above, please send your request(s) by email: <b className='font-bold'> hello@revaltronics.com.</b>
                    </div>
                    <br />
                    <div>
                    Your data protection rights, described above, are covered by the CCPA, short for the California Consumer Privacy Act. To find out more, visit the official California Legislative Information website. The CCPA took effect on 01/01/2020.
                    </div>

                    <br /><br />


                    <div className="font-bold">
                    13. Service Providers
                    </div>
                    <br />
                    <div>
                    These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                    </div>


                    <br /><br />


                    <div className="font-bold">
                        14. Analytics
                    </div>
                    <br />
                    <div>
                    We may use third-party Service Providers to monitor and analyze the use of our Service.
                    </div>

                    <br /><br />


                    <div className="font-bold">
                    15. CI/CD tools
                    </div>
                    <br />
                    <div>
                    We may use third-party Service Providers to automate the development process of our Service.
                    </div>

                    <br /><br />


                    <div className="font-bold">
                    16. Advertising
                    </div>
                    <br />
                    <div>
                    We may use third-party Service Providers to show advertisements to you to help support and maintain our Service.
                    </div>

                    <br /><br />


                    <div className="font-bold">
                    17. Behavioral Remarketing
                    </div>
                    <br />
                    <div>
                    We may use remarketing services to advertise on third party websites to you after you visited our Service. We and our third-party vendors use cookies to inform, optimise and serve ads based on your past visits to our Service.
                    </div>


                    <br /><br />


                    <div className="font-bold">
                    18. Links to Other Sites
                    </div>
                    <br />
                    <div>
                    Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit                   
                     </div>
                    <br />
                    <div>
                    We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                     </div>


                     <br /><br />


                     <div className="font-bold">
                     19. Children’s Privacy
                     </div>
                     <br />
                     <div>
                     Our Services are not intended for use by children under the age of 18 (“<b className='font-bold'>Child</b>” or “<b className='font-bold'>Children</b>”).
                     </div>
                     <br />
                     <div>
                     We do not knowingly collect personally identifiable information from Children under 18. If you become aware that a Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we take steps to remove that information from our servers.
                     </div>


                     <br /><br />


                     <div className="font-bold">
                     20. Changes to This Privacy Policy
                     </div>
                     <br />
                     <div>
                     We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                     </div>
                     <br />
                     <div>
                     We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update “effective date” at the top of this Privacy Policy.
                     </div>
                     <br />
                     <div>
                     You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                     </div>

                     
                     <br /><br />


                     <div className="font-bold">
                     21. Contact Us
                     </div>
                     <br />
                     <div>
                     If you have any questions about this Privacy Policy, please contact us by email: <b className='font-bold'>hello@revaltronics.com.</b>
                     </div>


                </div>
            </div>
        </div>
    )
}
