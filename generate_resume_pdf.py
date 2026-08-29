import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Frame, PageTemplate
)
from reportlab.pdfgen import canvas

def build_pdf():
    pdf_path = os.path.abspath(r"public\sayaniroy_resume.pdf")
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=32,
        rightMargin=32,
        topMargin=26,
        bottomMargin=20
    )

    PRIMARY_COLOR = colors.HexColor("#1d68a7")
    DARK_TEXT = colors.HexColor("#1e293b")
    MUTED_TEXT = colors.HexColor("#475569")
    LIGHT_BG = colors.HexColor("#1d68a7")
    LINE_COLOR = colors.HexColor("#1d68a7")

    styles = getSampleStyleSheet()

    # Custom styles
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
        fontSize=9.5,
        leading=12,
        textColor=PRIMARY_COLOR
    )

    header_contact = ParagraphStyle(
        'HeaderContact',
        fontName='Helvetica',
        fontSize=7.8,
        leading=10,
        textColor=MUTED_TEXT
    )

    sec_heading = ParagraphStyle(
        'SecHeading',
        fontName='Helvetica-Bold',
        fontSize=9.2,
        leading=12,
        textColor=PRIMARY_COLOR,
        spaceAfter=3,
        spaceBefore=6
    )

    item_title = ParagraphStyle(
        'ItemTitle',
        fontName='Helvetica-Bold',
        fontSize=8.2,
        leading=10.5,
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
        fontSize=7.2,
        leading=9,
        textColor=MUTED_TEXT
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        fontName='Helvetica',
        fontSize=7.4,
        leading=9.8,
        textColor=DARK_TEXT,
        leftIndent=8
    )

    body_style = ParagraphStyle(
        'BodyStyle',
        fontName='Helvetica',
        fontSize=7.8,
        leading=10.5,
        textColor=DARK_TEXT
    )

    stack_style = ParagraphStyle(
        'StackStyle',
        fontName='Helvetica',
        fontSize=7.2,
        leading=9.2,
        textColor=MUTED_TEXT
    )

    link_style = ParagraphStyle(
        'LinkStyle',
        fontName='Helvetica-Bold',
        fontSize=7.2,
        leading=9.2,
        textColor=PRIMARY_COLOR
    )

    elements = []

    # --- HEADER ---
    # SR Box Table + Info
    sr_badge = Paragraph(
        '<font color="white"><b>SR</b></font>',
        ParagraphStyle('SR', fontName='Helvetica-Bold', fontSize=18, leading=20, alignment=1)
    )
    
    header_info = [
        Paragraph("<b>SAYANI ROY</b>", header_name),
        Spacer(1, 1),
        Paragraph("BACKEND DEVELOPER / ASPIRING DEVOPS ENGINEER", header_sub),
        Spacer(1, 1),
        Paragraph("Phone: +91 9749555376 &nbsp;|&nbsp; Email: nisharoy3363@gmail.com &nbsp;|&nbsp; LinkedIn: <font color='#1d68a7'><u>Profile Link</u></font> &nbsp;|&nbsp; Portfolio: <font color='#1d68a7'><u>Portfolio Link</u></font>", header_contact)
    ]

    header_table = Table(
        [[sr_badge, header_info]],
        colWidths=[42, 506]
    )
    header_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (0, 0), PRIMARY_COLOR),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('ALIGN', (0, 0), (0, 0), 'CENTER'),
        ('BOTTOMPADDING', (0, 0), (0, 0), 6),
        ('TOPPADDING', (0, 0), (0, 0), 6),
        ('LEFTPADDING', (1, 0), (1, 0), 10),
        ('LINEBELOW', (0, 0), (-1, -1), 1.5, LINE_COLOR),
        ('BOTTOMPADDING', (1, 0), (1, 0), 6),
    ]))

    elements.append(header_table)
    elements.append(Spacer(1, 6))

    # --- 2 COLUMN CONTENT ---
    # LEFT COLUMN FLOW
    left_flow = []
    left_flow.append(Paragraph("<b>EDUCATION</b>", sec_heading))
    left_flow.append(Paragraph("<b>Master of Computer Applications (MCA)</b>", item_title))
    left_flow.append(Paragraph("Academy of Technology", item_sub))
    left_flow.append(Paragraph("Hooghly, WB | 2022–2024", item_meta))
    left_flow.append(Paragraph("Percentage: 70%", item_meta))
    left_flow.append(Spacer(1, 4))

    left_flow.append(Paragraph("<b>Bachelor of Computer Applications (BCA)</b>", item_title))
    left_flow.append(Paragraph("Burdwan University", item_sub))
    left_flow.append(Paragraph("Bardhaman, WB | 2019–2022", item_meta))
    left_flow.append(Paragraph("Percentage: 80%", item_meta))
    left_flow.append(Spacer(1, 4))

    left_flow.append(Paragraph("<b>Higher Secondary Education</b>", item_title))
    left_flow.append(Paragraph("Panchmura High School", item_sub))
    left_flow.append(Paragraph("West Bengal | 2018–2019", item_meta))
    left_flow.append(Paragraph("Percentage: 79%", item_meta))
    left_flow.append(Spacer(1, 4))

    left_flow.append(Paragraph("<b>Secondary Education</b>", item_title))
    left_flow.append(Paragraph("West Bengal Board (WBBSE)", item_sub))
    left_flow.append(Paragraph("West Bengal | 2016–2017", item_meta))
    left_flow.append(Spacer(1, 6))

    left_flow.append(Paragraph("<b>CREDENTIALS</b>", sec_heading))
    left_flow.append(Paragraph("<b>Data Analytics Course</b>", item_title))
    left_flow.append(Paragraph("NPTEL Certified", item_meta))
    left_flow.append(Spacer(1, 3))
    left_flow.append(Paragraph("<b>Azure Zero to Hero: Microsoft Cloud</b>", item_title))
    left_flow.append(Paragraph("Udemy Certified", item_meta))
    left_flow.append(Spacer(1, 6))

    left_flow.append(Paragraph("<b>CORE STRENGTHS</b>", sec_heading))
    left_flow.append(Paragraph("• System Architecture Troubleshooting", bullet_style))
    left_flow.append(Spacer(1, 2))
    left_flow.append(Paragraph("• Database Schema Optimization & Query Refactoring", bullet_style))
    left_flow.append(Spacer(1, 2))
    left_flow.append(Paragraph("• Docker Containerization & CI/CD", bullet_style))

    # RIGHT COLUMN FLOW
    right_flow = []
    right_flow.append(Paragraph("<b>PROFILE</b>", sec_heading))
    right_flow.append(Paragraph("Passionate Backend Developer with 2 years of IT industry experience engineering scalable server architectures, robust applications, and complex third-party API configurations. Transitioning architectures with modern DevOps and CI/CD practices.", body_style))
    right_flow.append(Spacer(1, 4))

    right_flow.append(Paragraph("<b>KEY SKILLS</b>", sec_heading))
    skills_data = [
        [Paragraph("<b>Languages & Tools:</b>", item_title), Paragraph("PHP, Python, Node.js, JavaScript, SQL, GitHub, Docker, CI/CD", body_style)],
        [Paragraph("<b>Frameworks & DB:</b>", item_title), Paragraph("Laravel, Django, MySQL", body_style)],
        [Paragraph("<b>AI & LLM Integrations:</b>", item_title), Paragraph("OpenAI API (ChatGPT, GPT Models), Google Gemini API, OpenRouter AI, AI Chatbot Architectures", body_style)],
        [Paragraph("<b>API Integrations:</b>", item_title), Paragraph("RESTful APIs, WhatsApp Business API, Razorpay Payment Gateway", body_style)],
    ]
    skills_table = Table(skills_data, colWidths=[105, 270])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    right_flow.append(skills_table)
    right_flow.append(Spacer(1, 4))

    right_flow.append(Paragraph("<b>WORK EXPERIENCE</b>", sec_heading))
    # Job 1
    job1_header = Table([
        [Paragraph("<b>Junior PHP Laravel Developer</b>", item_title), Paragraph("<font color='#1e293b'><b>Oct 2025–Present</b></font>", ParagraphStyle('R', alignment=2, fontName='Helvetica-Bold', fontSize=8, leading=10))]
    ], colWidths=[240, 135])
    job1_header.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    right_flow.append(job1_header)
    right_flow.append(Paragraph("WebMantra Technology Services Pvt. Ltd. &nbsp;|&nbsp; Kolkata, India", item_meta))
    right_flow.append(Spacer(1, 1))
    right_flow.append(Paragraph("• Architecting scalable backend microservices and implementing third-party enterprise vendor environments.", bullet_style))
    right_flow.append(Paragraph("• Integrating advanced AI technologies, securing production authentication metrics, and handling real-time application processing loops.", bullet_style))
    right_flow.append(Paragraph("• Structuring automated payment, transactional mail systems, and robust database models using Laravel and Node.js.", bullet_style))
    right_flow.append(Spacer(1, 4))

    # Job 2
    job2_header = Table([
        [Paragraph("<b>Junior Backend Developer</b>", item_title), Paragraph("<font color='#1e293b'><b>Jan 2024–Oct 2025</b></font>", ParagraphStyle('R', alignment=2, fontName='Helvetica-Bold', fontSize=8, leading=10))]
    ], colWidths=[240, 135])
    job2_header.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    right_flow.append(job2_header)
    right_flow.append(Paragraph("Octagen Infotech LLP &nbsp;|&nbsp; Kolkata, India", item_meta))
    right_flow.append(Spacer(1, 1))
    right_flow.append(Paragraph("• Managed end-to-end data processing servers, log troubleshooting setups, and API endpoint structural engineering.", bullet_style))
    right_flow.append(Paragraph("• Configured strict security policies, OAuth verification parameters, and real-time communications architecture across customer systems.", bullet_style))
    right_flow.append(Spacer(1, 4))

    right_flow.append(Paragraph("<b>CORE PROJECTS PORTFOLIO</b>", sec_heading))
    # Project 1
    right_flow.append(Paragraph("<b>Mafatlal Multi-Vendor E-Commerce Platform</b>", item_title))
    right_flow.append(Paragraph("<b>Stack:</b> PHP, Laravel, Node.js, MySQL, Gemini AI, OpenAI API, OpenRouter, OpenRoute API, OCR", stack_style))
    right_flow.append(Paragraph("<b>Live Link:</b> <font color='#1d68a7'><u>https://mafatlaluniforms.com/</u></font>", link_style))
    right_flow.append(Paragraph("• Engineered an enterprise multi-vendor e-commerce platform handling cross-segment product inventories and custom fabric modules.", bullet_style))
    right_flow.append(Paragraph("• Built high-performance Node.js microservices to handle complex automated asynchronous background logic.", bullet_style))
    right_flow.append(Paragraph("• Implemented an intelligent real-time customer support chatbot routing matrix utilizing Google Gemini API, OpenAI API, and OpenRouter AI integrations.", bullet_style))
    right_flow.append(Paragraph("• Integrated dedicated server modules for Fraud Image Detection, OCR validation systems, and real-time peer-to-peer customer chats.", bullet_style))
    right_flow.append(Spacer(1, 3))

    # Project 2
    right_flow.append(Paragraph("<b>Teavera E-Commerce Experience Infrastructure</b>", item_title))
    right_flow.append(Paragraph("<b>Stack:</b> PHP, Laravel, Node.js, MySQL, Webhooks, WhatsApp Business API", stack_style))
    right_flow.append(Paragraph("<b>Live Link:</b> <font color='#1d68a7'><u>https://teavera.in/</u></font>", link_style))
    right_flow.append(Paragraph("• Built transactional messaging infrastructure deploying multi-point automated webhooks linked with core client systems.", bullet_style))
    right_flow.append(Spacer(1, 3))

    # Project 3
    right_flow.append(Paragraph("<b>Full-Stack Book Publication Platform</b>", item_title))
    right_flow.append(Paragraph("<b>Stack:</b> PHP, Laravel, REST APIs, MySQL, Stripe Gateway", stack_style))
    right_flow.append(Paragraph("• Designed relational databases with secure payload execution layers to handle metadata indexing and digital payments.", bullet_style))

    # Combine into 2 Column Table
    main_table = Table(
        [[left_flow, right_flow]],
        colWidths=[165, 383]
    )
    main_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (0,0), 0),
        ('RIGHTPADDING', (0,0), (0,0), 12),
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
