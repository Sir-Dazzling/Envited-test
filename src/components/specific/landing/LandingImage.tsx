import React from "react";

const LandingImage = () => {
  return (
    <div className="rounded-sm shadow-md shadow-transparent">
      <img
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220927T222245Z&X-Amz-Expires=86400&X-Amz-Signature=581f135880bb583224d52027e19a32eb9af882a65b545ecc886fd891490c759d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
        alt="landing image"
        className="mt-9 mb-8  lg:px-0 lg:mt-0 lg:mb-0"
      />
    </div>
  );
};

export default LandingImage;
