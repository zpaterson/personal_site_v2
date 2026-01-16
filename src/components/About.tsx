import { 
  WELCOME_TXT, 
  ABOUT_TXT 
} from "../constants/content";

export const About = () => {
  return(
  <div>
    <h1 className="text-cyan-800">{WELCOME_TXT}</h1>
    <p className="whitespace-pre-line text-lg text-cyan-950">{ABOUT_TXT}</p>
  </div>
  );

}