# SOUL Radiology
## AI-Assisted Radiology Report Understanding Platform
**SFIC 2026 – Theme 03: Swasth & Samavesh Bharat (Healthy & Inclusive Bharat)**  
*Detailed Platform Prototype & Build Specification*

---

### 1. Executive Summary & Product Positioning
**SOUL Radiology** is a focused prototype web platform designed to make written radiology reports navigable and understandable for non-specialists, students, and healthcare reviewers. 

The platform translates technical radiologic language into:
- **Consistent Structured Findings** (categorised observations).
- **Plain-Language Explanations** (translating technical jargon without fabricating medical diagnoses).
- **Interactive Source Sentence Traceability** (linking observations directly to verbatim sentences in the original report).
- **Clinician Review Prompts** (non-alarmist demonstration alerts for findings needing professional attention).
- **Diagnostic Scan Visualizer** (strictly for visual display reference; computer vision image inference is out of scope).
- **Report Document Ingestion Studio** (browser FileReader supporting local `.txt`, `.pdf`, `.docx`, images, and pre-packaged SFIC benchmark test cases).

---

### 2. Design System & Brand Kit Alignment
Built strictly to the **SOUL Radiology Brand & UI Kit v1.0**:
- **Wordmark**: `SOUL` in Navy (`#17365D`), `Radiology` in Teal (`#13836B`).
- **Button Geometry**: Decent, professional 8px control radius (`border-radius: 8px`). No overly rounded or bubble pill buttons.
- **Card Geometry**: 12px radius (`border-radius: 12px`) with subtle borders.
- **National Government Aesthetic**: Adheres to Guidelines for Indian Government Websites (GIGW) with:
  - Tiranga accent strip (Saffron-White-Green).
  - Accessibility toolbar: Text size resizer (`A-`, `A`, `A+`), High Contrast mode, Multilingual language switcher (English, Hindi, Kannada).
  - Portal Login with Role Selection, Captcha verification, and instant one-click evaluator credentials.

#### Color Tokens
| Token | Hex Code | Purpose |
|---|---|---|
| `brand.navy` | `#17365D` | Primary navigation, headings, key actions |
| `brand.teal` | `#13836B` | Secondary actions, selected states, positive accents |
| `brand.saffron` | `#F3A536` | Review alerts, badges, focus highlights |
| `surface.page` | `#F5F7FA` | Clean app background |
| `surface.card` | `#FFFFFF` | Panels and content cards |
| `surface.teal-soft` | `#E8F5F1` | Calm informational & positive callouts |
| `surface.blue-soft` | `#EAF0F8` | Neutral informational panels |
| `surface.amber-soft` | `#FFF5E3` | Caution / clinician-review alert panels |
| `border.default` | `#D9E1EA` | Clean dividing lines and card outlines |

---

### 3. The 5 Synthetic Benchmark Scenarios
All data are fictional and synthetic (no identifiable patient records):
1. **Sample A (`SAMPLE_001`) — Normal Chest Radiograph (PA View)**:
   - *Purpose*: Demonstrate non-alarmist output. Validates that no unsupported warning appears for a normal scan.
2. **Sample B (`SAMPLE_002`) — Right Knee MRI**:
   - *Purpose*: Plain-language explanation of mild wear-and-tear (osteoarthritis) and intrasubstance fraying. Only stated follow-up is displayed.
3. **Sample C (`SAMPLE_003`) — Emergency Head CT**:
   - *Purpose*: Predefined demonstration warning panel linked to documented hyperdensity in left basal ganglia, with explicit clinician-review prompt on `#FFF5E3`.
4. **Sample D (`SAMPLE_004`) — Upper Abdomen Ultrasound**:
   - *Purpose*: Uncertainty handling demonstration. Communicates incomplete visualization of pancreas and gallbladder wall due to bowel gas without guessing.
5. **Sample E (`SAMPLE_005`) — Follow-Up Chest CT (Longitudinal)**:
   - *Purpose*: Prior report comparison showing 6-month stability of a 4.3 mm nodule compared to baseline (4.2 mm).

---

### 4. Working File Upload & Ingestion Studio
- **Functional Browser FileReader**: Users can drag & drop or browse `.txt`, `.pdf`, `.docx`, or scan images from their workstation.
- **Pre-Packaged Benchmark Loaders**: Instant one-click buttons to load benchmark files for quick evaluation without needing local files.
- **Text Extraction & Structured Parser**: Extracts indication, findings, and matches glossary terms with plain-language explanations.
- **Radiology Visualizer (Display Only)**: High-resolution visual canvas with Zoom In/Out, Invert Black/White, and Reset. Clearly labelled: *"Diagnostic Visualizer: Display Reference Only."*

---

### 5. Getting Started & Running Locally

```bash
# Navigate to project directory
cd soul-erp

# Install dependencies (if not already installed)
npm install

# Run the local development server
npm run dev

# Build for production
npm run build
```

---

### 6. Acceptance Checklist Status (Section 14 & 19)
- [x] **No ERP modules**: Hospital ERP, billing, appointments, and staff management completely eliminated.
- [x] **No arbitrary medical-image AI claims**: Radiology visualizer clearly marked for display only.
- [x] **Every sample clearly labelled synthetic**: Explicit demo indicators across all views.
- [x] **Deterministic predefined mapping**: Zero cross-sample leakage or random outputs.
- [x] **Mandatory result disclosure**: Prototype demo notice visible alongside every result.
- [x] **Source traceability**: Interactive hover/click sentence highlighting linking findings to verbatim report.
- [x] **Decent button design**: Standard 8px radius buttons; no extreme rounded pills.
- [x] **GIGW Accessibility**: A- / A / A+ font sizing, high contrast, bilingual terminology support.
- [x] **Working file upload**: Tested and functional file reading with local preview and parsing.
