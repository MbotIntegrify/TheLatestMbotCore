//using System;
//using System.Speech.Synthesis;

//namespace MBotRangerCore.Models
//{
//    public class Voice
//    {

//        public bool Silent { get; set; }

//        SpeechSynthesizer synth;

//        public Voice()
//        {
//            synth = new SpeechSynthesizer();
//            synth.SetOutputToDefaultAudioDevice();
//        }

//        public string Speak(string text)
//        {
//            if (Silent == false)
//            {
//                synth.SpeakAsync(text);
//            }

//            return text;
//        }

//    }
//}

/**********
//This is how to access this class:
    class Program
    {
        static void Main(string[] args)
        {
            Voice synth = new Voice();
            synth.Silent = true; // To mute the voice synthesizer
            synth.Silent = false; // To activate the voice synthesizer, default.
            Console.WriteLine("Hello World!");
            synth.Speak("Hello World!"); // To make the synthesizer to read the text.
            Console.ReadLine();
        }
    }
***********/
