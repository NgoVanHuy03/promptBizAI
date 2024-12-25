////DOCUMENT////
/*
  businessInfo.industry: tên ngành
  businessInfo.occupation: tên nghề
  businessInfo.businessModel: tên mô hình
  businessInfo.service.name: tên dịch vụ
*/

const prompt = `
    Dựa trên thông tin sau đây:
    Ngành: ${businessInfo.industry}
    Nghề: ${businessInfo.occupation}
    Mô hình kinh doanh: ${businessInfo.businessModel}
    Dịch vụ kinh doanh: ${businessInfo.service.name}

    Hãy tạo một phân tích kinh doanh chi tiết theo cấu trúc JSON sau, bao gồm cả dữ liệu dự báo tăng trưởng hàng tháng từ 12/2024 đến 12/2025:
    {
        "overview": {
            "title": "Tổng quan dịch vụ",
            "items": ["item1", "item2", "item3"]
        },
        "targetMarket": {
            "title": "Thị trường mục tiêu",
            "segments": [
                {
                    "name": "Phân khúc 1",
                    "details": ["detail1", "detail2", "detail3"]
                },
                {
                    "name": "Phân khúc 2",
                    "details": ["detail1", "detail2", "detail3"]
                }
            ]
        },
        "financial": {
            "investment": "Số tiền đầu tư", //ví dụ: 500.000.000 VND
            "monthlyExpense": "Chi phí hàng tháng",
            "returnPeriod": "Thời gian hoàn vốn",
            "profit": "Tỷ suất lợi nhuận"
        },
        "swotAnalysis": {
            "strengths": ["strength1", "strength2", "strength3", "strength4"],
            "weaknesses": ["weakness1", "weakness2", "weakness3", "weakness4"],
            "opportunities": ["opportunity1", "opportunity2", "opportunity3", "opportunity4"],
            "threats": ["threat1", "threat2", "threat3", "threat4"]
        },
        "problems": ["problem1", "problem2", "problem3", "problem4"],
        "solutions": ["solution1", "solution2", "solution3", "solution4"],
        "growthAnalysis": {
            "title": "Dự đoán tốc độ tăng trưởng ngành 2024-2025",
            "insights": ["insight1", "insight2", "insight3", "insight4"]
        },
        "growthChartData": [
            {
                "month": "12/2024",
                "growth": 15.2
            },
            // Thêm dữ liệu cho các tháng tiếp theo từ 01/2025 đến 12/2025
            // với tỷ lệ tăng trưởng thực tế dựa trên phân tích ngành
        ],
        "experience": {
            "title": "Kinh nghiệm cần có",
            "essential": {
                "title": "Kiến thức cốt lõi",
                "items": ["item1", "item2", "item3", "item4"]
            },
            "important": {
                "title": "Kiến thức quan trọng",
                "items": ["item1", "item2", "item3", "item4"]
            },
            "optional": {
                "title": "Kiến thức bổ sung",
                "items": ["item1", "item2", "item3", "item4"]
            }
        },
        "resources": {
            "title": "Nguồn lực cần có",
            "mustHave": {
                "title": "Nguồn lực thiết yếu",
                "items": ["item1", "item2", "item3", "item4"]
            },
            "shouldHave": {
                "title": "Nguồn lực quan trọng",
                "items": ["item1", "item2", "item3", "item4"]
            },
            "niceToHave": {
                "title": "Nguồn lực mở rộng",
                "items": ["item1", "item2", "item3", "item4"]
            }
        },
        "roadmap": {
            "title": "Lộ trình triển khai",
            "phases": [
                {
                    "title": "Giai đoạn 1",
                    "steps": ["step1", "step2", "step3", "step4"]
                },
                {
                    "title": "Giai đoạn 2",
                    "steps": ["step1", "step2", "step3", "step4"]
                },
                {
                    "title": "Giai đoạn 3",
                    "steps": ["step1", "step2", "step3", "step4"]
                }
            ]
        }
    }

    Lưu ý:
    1. Phân tích phải phù hợp với ngành và mô hình kinh doanh được cung cấp
    2. Dữ liệu tăng trưởng trong growthChartData phải thực tế và phản ánh xu hướng ngành
    3. Tất cả các giá trị số liệu phải hợp lý và có tính thực tế cao
    [X] là số
    `;