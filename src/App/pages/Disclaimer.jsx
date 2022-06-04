import React from 'react'
import { SearchBar } from '../components/SearchBar'
import { ButtonHeader } from '../components/ButtonHeader'
import { Helmet } from 'react-helmet';


export const Disclaimer = (props) => {
    return (
        <div className='Disclaimer h-full w-full overflow-hidden dark:bg-[#2C2C2C]'>

            <Helmet>
                <title>Disclaimer | Revaltronics</title>
                <meta property="og:title" content="Disclaimer | Revaltronics" />
                <meta property="og:description" content="Download latest lyrics in CRT format or you can view them online." />
                <meta property="og:image" content="https://revaltronics.com/static/media/logo.c52891f966eb2c3861ca.png" />
            </Helmet>

            <div className='lg:h-[10%] sm:h-[30%] h-[23%]'>

                <SearchBar toggleSideBar={() => { props.toggleSideBar() }} />
            </div>

            <div className='overflow-auto lg:h-[90%] sm:h-[70%] h-[77%] bg-[#FBFBFB] px-6  pb-5 dark:bg-[#2C2C2C]'>
                <div className='flex justify-start my-5 '>
                    <ButtonHeader title={'Disclaimer'} />
                </div>
                <div className='text-justify dark:text-[#FAF9F6]  dark:bg-[#2C2C2C] bg-[#FFFFFF] p-4 rounded-[5px]'>
                    <div className='font-bold'>
                        WEBSITE DISCLAIMER
                    </div>
                    <br />
                    <div className=''>
                        The information provided by <b className='font-bold'> RevAltronics. </b> (“Company”, “we”, “our”, “us”) on <b className='font-bold'> revaltronics.com </b> (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
                        <br /><br />
                        UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
                    </div>
                    <br />

                    <div className='font-bold'>
                        EXTERNAL LINKS DISCLAIMER
                    </div>
                    <br />
                    <div className=''>
                        The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
                        <br /><br />
                        WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
                    </div>
                    <br />

                    <div className='font-bold'>
                        AFFILIATES DISCLAIMER
                    </div>
                    <br />
                    <div className=''>
                        The Site may contain links to affiliate websites, and we may receive an affiliate commission for any purchases or actions made by you on the affiliate websites using such links.
                    </div>
                    <br />

                    <div className='font-bold'>
                        ERRORS AND OMISSIONS DISCLAIMER
                    </div>
                    <br />
                    <div className=''>
                        While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, RevAltronics is not responsible for any errors or omissions or for the results obtained from the use of this information. All information in this site is provided “as is”, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability, and fitness for a particular purpose.
                        <br /><br />
                        In no event will RevAltronics, its related partnerships or corporations, or the partners, agents or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information in this Site or for any consequential, special or similar damages, even if advised of the possibility of such damages.
                    </div>
                    <br />


                    <div className='font-bold'>
                        LOGOS AND TRADEMARKS DISCLAIMER
                    </div>
                    <br />
                    <div className=''>
                        All logos and trademarks of third parties referenced on revaltronics.com are the trademarks and logos of their respective owners. Any inclusion of such trademarks or logos does not imply or constitute any approval, endorsement or sponsorship of RevAltronics by such owners.
                    </div>
                    <br />


                    <div className='font-bold'>
                        CONTACT US
                    </div>
                    <br />
                    <div className=''>
                    Should you have any feedback, comments, requests for technical support or other inquiries, please contact us by email: <b className='font-bold'>hello@revaltronics.com. </b>
                    </div>
                    <br />

                </div>
            </div>
        </div>
    )
}
