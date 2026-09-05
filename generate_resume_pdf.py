import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)

def build_pdf():
    pdf_path = os.path.abspath(r"public\sayaniroy_resume.pdf")
    # Letter size: 612 x 792 pt
    # Margins: Left 32, Right 32, Top 24, Bottom 20 => Usable width = 548 pt, Usable height = 748 pt
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=32,
        rightMargin=32,
        topMargin=24,
        bottomMargin=20
    )

    PRIMARY_COLOR = colors.HexColor("#1b528b")  # Matching executive corporate navy blue
    DARK_TEXT = colors.HexColor("#111827")
    MUTED_TEXT = colors.HexColor("#374151")
    LINE_COLOR = colors.HexColor("#1b528b")

    # Typography styles tailored to fit exactly 1 page
    header_name = ParagraphStyle(
        'HeaderName',
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=22,
        textColor=PRIMARY_COLOR
    )

    header_sub = ParagraphStyle(
        'HeaderSub',
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=PRIMARY_COLOR
    )

    header_contact = ParagraphStyle(
        'HeaderContact',
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=MUTED_TEXT
    )

    sec_heading = ParagraphStyle(
        'SecHeading',
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=11,
        textColor=PRIMARY_COLOR,
        spaceAfter=0,
        spaceBefore=0
    )

    item_title = ParagraphStyle(
        'ItemTitle',
        fontName='Helvetica-Bold',
        fontSize=8.2,
        leading=10.2,
        textColor=DARK_TEXT
    )

    item_sub = ParagraphStyle(
        'ItemSub',
        fontName='Helvetica',
        fontSize=7.6,
        leading=9.5,
        textColor=DARK_TEXT
    )

    item_meta = ParagraphStyle(
        'ItemMeta',
        fontName='Helvetica',
        fontSize=7.3,
        leading=9.2,
        textColor=MUTED_TEXT
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        fontName='Helvetica',
        fontSize=7.4,
        leading=9.6,
        textColor=DARK_TEXT,
        leftIndent=8
    )

    body_style = ParagraphStyle(
        'BodyStyle',
        fontName='Helvetica',
        fontSize=7.6,
        leading=10.2,
        textColor=DARK_TEXT
    )

    stack_style = ParagraphStyle(
        'StackStyle',
        fontName='Helvetica',
        fontSize=7.3,
        leading=9.4,
        textColor=MUTED_TEXT
    )

    link_style = ParagraphStyle(
        'LinkStyle',
        fontName='Helvetica',
        fontSize=7.3,
        leading=9.4,
        textColor=PRIMARY_COLOR
    )

    def make_section_header(title, width):
        p = Paragraph(f"<b>{title}</b>", sec_heading)
        line = HRFlowable(width="100%", thickness=1.2, color=LINE_COLOR, spaceBefore=2, spaceAfter=4)
        return [p, line]

    elements = []

    # --- HEADER ---
    sr_badge = Paragraph(
        '<font color="white"><b>SR</b></font>',
        ParagraphStyle('SR', fontName='Helvetica-Bold', fontSize=18, leading=20, alignment=1)
    )
    
    header_info = [
        Paragraph("<b>SAYANI ROY</b>", header_name),
        Spacer(1, 1),
        Paragraph("BACKEND DEVELOPER", header_sub),
        Spacer(1, 2),
        Paragraph("Phone: +91 9749555376 &nbsp;|&nbsp; Email: nisharoy3363@gmail.com", header_contact),
        Paragraph("LinkedIn: <a href='https://www.linkedin.com/in/sayani-roy-36a167197/'><font color='#1b528b'><u>Profile Link</u></font></a> &nbsp;|&nbsp; Portfolio: <a href='https://github.com/TechHub88/'><font color='#1b528b'><u>Portfolio Link</u></font></a>", header_contact)
    ]

    header_table = Table(
        [[sr_badge, header_info]],
        colWidths=[42, 506]
    )
    header_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (0, 0), PRIMARY_COLOR),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('ALIGN', (0, 0), (0, 0), 'CENTER'),
        ('BOTTOMPADDING', (0, 0), (0, 0), 8),
        ('TOPPADDING', (0, 0), (0, 0), 8),
        ('LEFTPADDING', (1, 0), (1, 0), 12),
        ('LINEBELOW', (0, 0), (-1, -1), 1.5, LINE_COLOR),
        ('BOTTOMPADDING', (1, 0), (1, 0), 6),
    ]))

    elements.append(header_table)
    elements.append(Spacer(1, 6))

    # --- 2 COLUMN CONTENT ---
    # LEFT COLUMN FLOW (width ~ 160pt)
    left_flow = []
    
    # EDUCATION
    left_flow.extend(make_section_header("EDUCATION", 160))
    left_flow.append(Paragraph("<b>Master of Computer Applications (MCA)</b>", item_title))
    left_flow.append(Paragraph("Academy of Technology", item_sub))
    left_flow.append(Paragraph("Hooghly, WB", item_meta))
    left_flow.append(Paragraph("2022-2024", item_meta))
    left_flow.append(Paragraph("Percentage: 70%", item_meta))
    left_flow.append(Spacer(1, 4))

    left_flow.append(Paragraph("<b>Bachelor of Computer Applications (BCA)</b>", item_title))
    left_flow.append(Paragraph("Burdwan University", item_sub))
    left_flow.append(Paragraph("Bardhaman, WB", item_meta))
    left_flow.append(Paragraph("2019-2022", item_meta))
    left_flow.append(Paragraph("Percentage: 80%", item_meta))
    left_flow.append(Spacer(1, 4))

    left_flow.append(Paragraph("<b>Higher Secondary Education</b>", item_title))
    left_flow.append(Paragraph("Panchmura High School", item_sub))
    left_flow.append(Paragraph("West Bengal", item_meta))
    left_flow.append(Paragraph("2018-2019", item_meta))
    left_flow.append(Paragraph("Percentage: 79%", item_meta))
    left_flow.append(Spacer(1, 4))

    left_flow.append(Paragraph("<b>Secondary Education</b>", item_title))
    left_flow.append(Paragraph("West Bengal Board (WBBSE)", item_sub))
    left_flow.append(Paragraph("West Bengal", item_meta))
    left_flow.append(Paragraph("2016-2017", item_meta))
    left_flow.append(Spacer(1, 7))

    # CREDENTIALS
    left_flow.extend(make_section_header("CREDENTIALS", 160))
    left_flow.append(Paragraph("• Data Analytics Course", item_title))
    left_flow.append(Paragraph("&nbsp; NPTEL Certified", item_meta))
    left_flow.append(Spacer(1, 7))

    # CORE STRENGTHS
    left_flow.extend(make_section_header("CORE STRENGTHS", 160))
    left_flow.append(Paragraph("• Dedicated Teamwork &amp; Collaboration", bullet_style))
    left_flow.append(Spacer(1, 2))
    left_flow.append(Paragraph("• On-Time Project Delivery", bullet_style))
    left_flow.append(Spacer(1, 2))
    left_flow.append(Paragraph("• Problem Solving &amp; System Architecture", bullet_style))

    # RIGHT COLUMN FLOW (width ~ 375pt)
    right_flow = []

    # PROFILE
    right_flow.extend(make_section_header("PROFILE", 375))
    right_flow.append(Paragraph(
        "Passionate Backend Developer with 2 years of IT industry experience engineering scalable server "
        "architectures, robust applications, complex third-party API configurations, and cloud deployment "
        "pipelines. Proficient in backend microservices, containerization using Docker, CI/CD automation, "
        "and cloud infrastructure management on GCP.", body_style
    ))
    right_flow.append(Spacer(1, 5))

    # KEY SKILLS
    right_flow.extend(make_section_header("KEY SKILLS", 375))
    skills_data = [
        [Paragraph("<b>Languages &amp; Tools:</b>", item_title), Paragraph("PHP, Python, Node.js, JavaScript", body_style)],
        [Paragraph("<b>Frameworks &amp; DB:</b>", item_title), Paragraph("Laravel, Django, MySQL", body_style)],
        [Paragraph("<b>AI &amp; API Integrations:</b>", item_title), Paragraph("RESTful APIs, WhatsApp Business API, Webhooks, OpenAI API (ChatGPT, GPT Models), Google Gemini API, OpenRouter AI", body_style)],
        [Paragraph("<b>DevOps &amp; Cloud:</b>", item_title), Paragraph("Docker, CI/CD Pipelines, Git, GitHub, Linux, GCP", body_style)],
    ]
    skills_table = Table(skills_data, colWidths=[110, 265])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    right_flow.append(skills_table)
    right_flow.append(Spacer(1, 5))

    # WORK EXPERIENCE
    right_flow.extend(make_section_header("WORK EXPERIENCE", 375))
    
    # Job 1
    job1_header = Table([
        [Paragraph("<b>Junior PHP Laravel Developer</b>", item_title), Paragraph("<font color='#1b528b'><b>Oct 2025 – Present</b></font>", ParagraphStyle('R', alignment=2, fontName='Helvetica-Bold', fontSize=8, leading=10))]
    ], colWidths=[245, 130])
    job1_header.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    right_flow.append(job1_header)
    right_flow.append(Paragraph("<i>WebMantra Technology Services Pvt. Ltd. | Kolkata, India</i>", item_meta))
    right_flow.append(Spacer(1, 1))
    right_flow.append(Paragraph("• Architected scalable backend microservices, AI integrations, and payment gateways using Laravel and Node.js.", bullet_style))
    right_flow.append(Paragraph("• Containerized components with Docker and managed GCP cloud instances on Linux.", bullet_style))
    right_flow.append(Paragraph("• Automated testing and deployment workflows using CI/CD pipelines via Git/GitHub.", bullet_style))
    right_flow.append(Spacer(1, 4))

    # Job 2
    job2_header = Table([
        [Paragraph("<b>Junior Backend Developer</b>", item_title), Paragraph("<font color='#1b528b'><b>Jan 2024 – Oct 2025</b></font>", ParagraphStyle('R', alignment=2, fontName='Helvetica-Bold', fontSize=8, leading=10))]
    ], colWidths=[245, 130])
    job2_header.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    right_flow.append(job2_header)
    right_flow.append(Paragraph("<i>Octagen Infotech LLP | Kolkata, India</i>", item_meta))
    right_flow.append(Spacer(1, 1))
    right_flow.append(Paragraph("• Engineered core API endpoints, managed server logs, and secured OAuth authentication workflows.", bullet_style))
    right_flow.append(Paragraph("• Handled version control and branching strategies using Git.", bullet_style))
    right_flow.append(Spacer(1, 5))

    # CORE PROJECTS PORTFOLIO
    right_flow.extend(make_section_header("CORE PROJECTS PORTFOLIO", 375))
    
    # Project 1
    right_flow.append(Paragraph("<b>Mafatlal Multi-Vendor E-Commerce Platform</b>", item_title))
    right_flow.append(Paragraph("<b>Stack:</b> PHP, Laravel, Node.js, MySQL, Gemini AI, OpenAI API, OpenRouter, OpenRoute API, OCR Integration", stack_style))
    right_flow.append(Paragraph("<b>Live Link:</b> <a href='https://mafatlaluniforms.com/'><font color='#1b528b'><u>https://mafatlaluniforms.com/</u></font></a>", link_style))
    right_flow.append(Paragraph("• Engineered an enterprise multi-vendor e-commerce platform handling cross-segment product inventories and custom fabric modules.", bullet_style))
    right_flow.append(Paragraph("• Built high-performance Node.js microservices to handle complex automated asynchronous background logic.", bullet_style))
    right_flow.append(Paragraph("• Implemented an intelligent real-time customer support chatbot routing matrix utilizing Google Gemini API, OpenAI API, and OpenRouter AI integrations.", bullet_style))
    right_flow.append(Paragraph("• Integrated dedicated server modules for Fraud Image Detection, OCR validation systems, and real-time peer-to-peer customer chats.", bullet_style))
    right_flow.append(Spacer(1, 3))

    # Project 2
    right_flow.append(Paragraph("<b>Teavera E-Commerce Experience Infrastructure</b>", item_title))
    right_flow.append(Paragraph("<b>Stack:</b> PHP, Laravel, Node.js, MySQL, Webhooks, WhatsApp Business API", stack_style))
    right_flow.append(Paragraph("<b>Live Link:</b> <a href='https://teavera.in/'><font color='#1b528b'><u>https://teavera.in/</u></font></a>", link_style))
    right_flow.append(Spacer(1, 3))

    # Project 3
    right_flow.append(Paragraph("<b>Full-Stack Book Publication Platform</b>", item_title))
    right_flow.append(Paragraph("<b>Stack:</b> PHP, Laravel, REST APIs, MySQL, Stripe Gateway", stack_style))

    # Combine into 2 Column Table
    main_table = Table(
        [[left_flow, right_flow]],
        colWidths=[165, 383]
    )
    main_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (0,0), 0),
        ('RIGHTPADDING', (0,0), (0,0), 10),
        ('LEFTPADDING', (1,0), (1,0), 0),
        ('RIGHTPADDING', (1,0), (1,0), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))

    elements.append(main_table)

    doc.build(elements)
    print("PDF generated successfully at:", pdf_path)

if __name__ == "__main__":
    build_pdf()
