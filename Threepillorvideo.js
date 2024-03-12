import React from 'react';

const VideoComponent = () => {
  return (
    <div>
      <div className="last_second_row">
        <div data-autoplay="true" data-loop="true" data-wf-ignore="true">
          <video autoPlay loop muted playsInline>
            <source src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/655f76e1f9796cbeb08e54e8_2Nd" />
          </video>
        </div>
      </div>
      <div className="last_second_row">
        <div data-autoplay="true" data-loop="true" data-wf-ignore="true">
          <video autoPlay loop muted playsInline>
            <source src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/655f76e1f9796cbeb08e54e8_2Nd Snippet compressed-transcode.mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
