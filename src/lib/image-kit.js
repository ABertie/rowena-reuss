import ImageKit from "imagekit";

var imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_KIT_PUBLIC_KEY,
    privateKey: process.env.KIT_PRIVATE_KEY,
    urlEndpoint: "https://ik.imagekit.io/dbmmghwyv/",
});

export default imagekit