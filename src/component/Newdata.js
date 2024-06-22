import React from 'react'
import Newsdisplaycard from './Newsdisplaycard'
import { globalContext } from '../ContextAPI/NoteState';
import { useContext } from 'react';

const Newdata = (props) => {
 
  const { isHome} = 
    useContext(globalContext);
    
  return (
    <div className="flex justify-center">
        <div className={`grid ${isHome?"grid grid-cols-1 justify-center w-[60vw] lg:w-[37vw] gap-10" :"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[60vw] md:w-[80vw] lg:w-[90vw]"}`}>
        {
          (isHome ? props.data?.filter(article => 
              article.urlToImage && article.title && article.description  && article.author &&article.content
            )?.slice(0, 5) :
        props.data?.filter(article=>article.urlToImage && article.title && article.description  && article.author &&article.content))?.map((values, index) => (
          <Newsdisplaycard
            key={index?.source?.id ? index.source.id : ""}
            name={values?.source?.name ? values.source.name: ""}
            author={values?.author ? values.author : "Unknown Author"}
            title={values?.title ? values.title : ""}
            description={values?.description ? values.description : "Not Availabe"}
            url={values?.url ? values.url : ""}
            image={
              values?.urlToImage
                ? values.urlToImage
                : "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/overhead-view-of-business-strategy-meeting.jpg&w=1200&h=630"
            }
            publishdate={
              values?.publishedAt ? values.publishedAt : "Date not available"
            }
            content={values?.content ? values.content : "Not availabe"}
            logincomment={props.loginComment}
          />
        ))
        }
      </div>
    </div>
  )
}

export default Newdata