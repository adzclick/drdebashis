// src/data/treatmentsData.js
import {
  Bone,
  PersonStanding,
  Accessibility,
  Hand,
  Dumbbell,
  ShieldPlus,
  Spline,
  Stethoscope,
} from "lucide-react";

export const treatments = [
  {
    slug: "joint-replacement",
    name: "Joint Replacement Surgery",
    icon: Bone,
    image:
      "https://images.unsplash.com/photo-1579154491781-5e199df316aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGpvaW50JTIwcmVwbGFjZW1lbnQlMjBzdXJnZXJ5fGVufDB8fDB8fHww",
    shortDescription: "Advanced knee, hip and shoulder replacement procedures.",
    overview:
      "Joint replacement surgery removes damaged or worn joint surfaces and replaces them with durable artificial implants, restoring pain-free movement for patients with severe arthritis or joint degeneration.",
    details: `Joint replacement is recommended when conservative treatments — medication, physiotherapy, injections — no longer provide adequate relief from pain and stiffness.

Who it's for
Patients with advanced osteoarthritis, rheumatoid arthritis, or joint damage from injury who experience persistent pain, reduced mobility, and difficulty with daily activities are typically the best candidates.

The procedure
Under anesthesia, the damaged joint surface is removed and replaced with a prosthetic implant made of metal, ceramic, or high-grade plastic components designed to mimic natural joint movement.

Recovery
Most patients begin walking with assistance within a day of surgery. Physiotherapy starts early to rebuild strength and range of motion, with most people returning to normal daily activities within six to twelve weeks.

Long-term outlook
Modern joint implants typically last 15 to 25 years, and most patients report significant, lasting pain relief and improved quality of life.`,
  },
  {
    slug: "knee-pain",
    name: "Knee Pain Treatment",
    icon: PersonStanding,
    image:
      "https://media.istockphoto.com/id/493237162/photo/traumatology-orthopedic-surgery-knee-arthroscopy-drip.webp?a=1&b=1&s=612x612&w=0&k=20&c=3eCCF6oDBKj7GpSzCTwenqTLDc_dHIh1NDQ6zYpYwnk=",
    shortDescription: "Complete diagnosis and treatment for knee conditions.",
    overview:
      "Comprehensive evaluation and treatment for all forms of knee pain, from early cartilage wear to ligament injuries, using both non-surgical and surgical approaches tailored to each patient.",
    details: `Knee pain can stem from many causes — arthritis, ligament tears, meniscus injuries, tendinitis, or overuse — and effective treatment starts with an accurate diagnosis.

Diagnosis
A thorough clinical exam combined with imaging (X-ray, MRI where needed) identifies the exact source of pain, whether it's cartilage degeneration, structural damage, or inflammation.

Non-surgical options
Many cases respond well to physiotherapy, targeted exercises, activity modification, bracing, and anti-inflammatory treatment or injections.

When surgery is needed
Persistent pain, mechanical instability, or significant structural damage may require arthroscopic or reconstructive procedures, depending on the underlying cause.

Ongoing care
Long-term knee health is supported by weight management, appropriate footwear, and a consistent strengthening routine for the muscles supporting the joint.`,
  },
  {
    slug: "hip-replacement",
    name: "Hip Replacement",
    icon: Accessibility,
    image:
      "https://media.istockphoto.com/id/121026023/photo/orthopaedic-surgeon-consulting-pelvic-x-rays-for-a-hip-replacement.webp?a=1&b=1&s=612x612&w=0&k=20&c=rwfOW1PUIMVLOv8lNf_E1GVN8y1RwflCcE97E57kVOo=",
    shortDescription: "Modern hip replacement with faster recovery.",
    overview:
      "Total or partial hip replacement relieves chronic hip pain and restores mobility using modern implant designs and minimally invasive techniques that support faster recovery.",
    details: `Hip replacement is one of the most successful orthopedic procedures, offering reliable, long-lasting pain relief for patients with severe hip joint damage.

Candidacy
Patients with advanced arthritis, hip fractures, or avascular necrosis who no longer respond to conservative treatment are typically good candidates.

Modern approach
Minimally invasive surgical techniques and enhanced recovery protocols now allow many patients to stand and take assisted steps within hours of surgery.

Recovery timeline
Most patients walk independently within three to six weeks and resume most normal activities within three months, with continued strength gains over the following months.

Implant longevity
Contemporary hip implants are built to last 20+ years for the majority of patients with proper post-surgical care.`,
  },
  {
    slug: "arthritis",
    name: "Arthritis Treatment",
    icon: Hand,
    image:
      "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9ydGhvcGVkaWMlMjBzdXJnZXJ5fGVufDB8fDB8fHww",
    shortDescription: "Personalized arthritis management solutions.",
    overview:
      "A structured, individualized approach to managing arthritis symptoms and slowing joint damage, combining medication, lifestyle changes, and procedural options as needed.",
    details: `Arthritis treatment focuses on reducing pain and inflammation while preserving joint function for as long as possible.

Assessment
Treatment begins with identifying the type and severity of arthritis — osteoarthritis, rheumatoid, or another form — since management differs significantly between them.

Conservative management
Anti-inflammatory medication, physiotherapy, weight management, and activity modification form the foundation of most treatment plans.

Advanced options
For more severe or unresponsive cases, joint injections or surgical intervention, including joint replacement, may be considered.

Living well with arthritis
Regular low-impact exercise, joint protection techniques, and consistent follow-up care all help manage symptoms and maintain quality of life over time.`,
  },
  {
    slug: "sports-injury",
    name: "Sports Injury Treatment",
    icon: Dumbbell,
    image:
      "https://media.istockphoto.com/id/1497548487/photo/shoulder-muscle-pain-and-injury.webp?a=1&b=1&s=612x612&w=0&k=20&c=gCcxfhJ6E6S3uNRCR2Gf6sk-m5SexkRcjvyTcAlmO54=",
    shortDescription: "Treatment for ligament and tendon injuries.",
    overview:
      "Specialized care for sports-related ligament, tendon, and joint injuries, focused on both effective recovery and safe return to competitive activity.",
    details: `Athletes face a distinct set of injury risks, and treatment needs to balance thorough healing with a timely, safe return to sport.

Common injuries treated
ACL and other ligament tears, tendon injuries, meniscus damage, and joint instability are among the most frequently treated sports injuries.

Treatment approach
Depending on severity, treatment may range from structured physiotherapy programs to surgical reconstruction for complete ligament tears.

Rehabilitation
A staged rehab program rebuilds strength, balance, and sport-specific movement patterns before clearing an athlete to return to full competition.

Injury prevention
Neuromuscular training, proper warm-ups, and strength balance between muscle groups significantly reduce the risk of repeat injury.`,
  },
  {
    slug: "fracture",
    name: "Fracture Management",
    icon: ShieldPlus,
    image:
      "https://plus.unsplash.com/premium_photo-1726880466207-d85def51628f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEZyYWN0dXJlJTIwTWFuYWdlbWVudCUyMG9ydGhvcGVkaWN8ZW58MHx8MHx8fDA%3D",
    shortDescription: "Advanced fracture fixation and healing care.",
    overview:
      "Comprehensive fracture care from initial diagnosis through fixation and rehabilitation, using modern techniques to support faster, stronger healing.",
    details: `Effective fracture management depends on accurate diagnosis, appropriate fixation, and structured rehabilitation.

Diagnosis and classification
Imaging determines the fracture pattern and severity, guiding whether casting, bracing, or surgical fixation is the right approach.

Treatment options
Simple fractures often heal well with casting or bracing, while complex or displaced fractures typically require surgical fixation with plates, screws, or rods.

Healing and rehabilitation
Structured physiotherapy following fixation restores strength and range of motion as the bone heals, with timelines varying based on fracture location and severity.

Follow-up care
Regular imaging and clinical checks ensure proper healing and allow early identification of any complications.`,
  },
  {
    slug: "spine",
    name: "Spine & Back Pain Care",
    icon: Spline,
    image:
      "https://images.unsplash.com/photo-1650897492414-8661563845a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3BpbmUlMjAlMjYlMjBCYWNrJTIwUGFpbiUyMENhcmV8ZW58MHx8MHx8fDA%3D",
    shortDescription: "Comprehensive spine and back pain treatment.",
    overview:
      "Evaluation and treatment for acute and chronic back and spine conditions, ranging from posture-related pain to more complex spinal disorders.",
    details: `Back and spine pain has many possible causes, and effective treatment starts with identifying the specific source.

Common conditions treated
Disc degeneration, sciatica, spinal stenosis, and posture-related chronic back pain are among the most frequently seen conditions.

Non-surgical care
Most back pain responds well to physiotherapy, posture correction, core strengthening, and activity modification.

When further treatment is needed
Persistent nerve-related pain or structural spinal issues may require more advanced intervention, evaluated on a case-by-case basis.

Prevention and long-term care
Ergonomic adjustments, regular movement, and core strength are central to preventing recurrence of back pain long-term.`,
  },
  {
    slug: "consultation",
    name: "Orthopedic Consultation",
    icon: Stethoscope,
    image:
      "https://images.unsplash.com/photo-1758691461957-474a7686e388?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Expert orthopedic assessment and guidance.",
    overview:
      "A thorough initial assessment for any musculoskeletal concern, providing a clear diagnosis and a personalized treatment roadmap.",
    details: `An orthopedic consultation is often the first step toward resolving pain or mobility issues affecting bones, joints, or muscles.

What to expect
The consultation includes a detailed history, physical examination, and imaging review where needed, to accurately identify the underlying issue.

Personalized guidance
Based on the assessment, a tailored treatment plan is recommended — ranging from conservative management to referral for further procedures.

Ongoing relationship
Follow-up consultations track progress and adjust treatment as needed, ensuring the plan continues to fit the patient's recovery.`,
  },
];