import MediaInterface from "./Media";

export default interface VideoInterface extends MediaInterface {
  width: number;
  height: number;
  duration: number;
}