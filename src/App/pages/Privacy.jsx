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

            <SearchBar toggleSideBar={()=>{props.toggleSideBar()}}/>

            <div className='overflow-auto h-[100%] bg-[#FBFBFB] px-5 pt-5 lg:pb-[120px] pb-[250px] dark:bg-[#2C2C2C]'>
                <div className='flex justify-start my-4 mb-10'>
                    <ButtonHeader title={'Privacy'} />
                </div>
                <div className='text-justify dark:text-[#FAF9F6] dark:bg-[#2C2C2C] bg-[#FFFFFF] p-4 rounded-[5px]'>
                    <div className='font-normal'>
                    What is Lorem Ipsum?
                    </div>
                    <div className='font-light'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>

                    <br />

                    <div className="font-normal">
                        Why do we use it?
                    </div>
                    <div className="font-light">
                         It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </div>

                    <br />

                    <div className="font-normal">
                        Where does it come from?
                    </div>
                    <div className="font-light">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        <br />
                        <br />
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                    </div>

                    <br />

                    <div className="font-normal">
                        Where can I get some?
                    </div>
                    <div className="font-light">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </div>


                   
                    


                    


                </div>
            </div>
        </div>
    )
}
