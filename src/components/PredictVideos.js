import React from 'react';


const  PredictVideos = ({ onSelect, filtered, predicts}) => {
            let felteredPredicts = predicts.filter(predict => {
                return predict.snippet.title.toLowerCase().indexOf(filtered.toLowerCase()) !== -1
            })
            const videoName = felteredPredicts.map(predict => {
                return (
                    <div className='item predictItem' key={predict.id.videoId} style={{ cursor: 'pointer'}} onClick={() => onSelect(predict)}>
                        <div className='content' >
                            <i className='camera icon' />
                            {predict.snippet.title}
                        </div>
                    </div>
                )
            })
            return (
                <div className='shadow-border'>
                    <div className='ui list border' style={{padding: '0' ,}}>
                        {videoName}
                    </div>
                </div>
                
            )
         
        
    }

export default PredictVideos;
