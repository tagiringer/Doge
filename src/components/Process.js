import React from "react";
import { Button, Modal } from "semantic-ui-react";

function Process() {
  //let description = "";

  return (
    <Modal
      trigger={<a>Learn how its done!</a>}
      header="Breed analysis"
      content=" How are Bernard's ancestors represented in his DNA?

All dogs are related and share some DNA. Siblings share lots of their DNA (half of it in fact), cousins share a bit less (an eighth), and so on. Because dog breeds are made up of a closed group of dogs, all dogs in that breed share a lot of their DNA, typically about as much as second cousins, though it varies by breed. Different breeds that are closely related share somewhat less DNA, and dogs from very different breeds share even less DNA (but still much more DNA than either dog shares with a cat).

DNA is inherited in pieces, called chromosomes, that are passed along from parent to offspring. Each generation, these chromosomes are broken up and shuffled a bit in a process known as recombination. So, the length of the segments your dog shares with his ancestors decreases with each generation above him: he shares longer segments with his mom than his grandma, longer segments with his grandma than his great-grandma, and so on.
How does Embark know which breeds are in Bernard?

We can use the length of segments Bernard shares with our reference dogs to see how many generations it has been since they last shared an ancestor. Long segments of DNA that are identical to known purebred dogs tell Embark's scientists that Bernard has, without a doubt, a relative from that breed. By testing over 200,000 genetic markers, we build up his genes one DNA segment at a time, to learn the ancestry with great certainty. Other dog DNA tests look at many fewer genetic markers and have to take a guess at breed ancestry based on that.
What does this mean for Bernard's looks and behavior?

Look closely and you'll probably find Bernard has some physical and/or behavioral resemblance with his ancestor's breeds. The exact similarity depends on which parts of DNA Bernard shares with each breed. 
P.S. In a small proportion of cases, we find dogs that don’t share segments with other dogs we have tested, indicating the presence of a rare breed that is not part of our reference panel or possibly a true village dog without any purebred relatives at all. In these rare cases we contact the owner to find out more and let them know about their unique dog before they get their results. With this in-depth detective work, we are pushing science forward by identifying genetically unique groups of dogs. "
      actions={[{ key: "done", content: "Done", positive: true }]}
    />
  );
}

export default Process;
