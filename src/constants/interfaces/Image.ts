import MediaInterface from "./Media";

export default interface ImageInterface extends MediaInterface {
  width: number;
  height: number;
}