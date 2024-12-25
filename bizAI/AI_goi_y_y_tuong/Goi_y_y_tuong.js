// {
//     // Vốn đầu tư/tài chính ban đầu 
//     capital: 100000000,  // 100 triệu VND - số vốn yêu cầu để bắt đầu
    
//     // Yêu cầu về trình độ học vấn
//     education: "Bằng đại học Bách khoa hà nội",  // Bằng cấp/trường học cụ thể được yêu cầu
    
//     // Tài sản sở hữu/yêu cầu
//     estate: "2 ô tô, 1 bất động sản",  // Tài sản cần có/chứng minh khả năng tài chính
    
//     // Kinh nghiệm làm việc yêu cầu
//     experience: "2 năm quản lý nhân sự",  // Số năm kinh nghiệm trong lĩnh vực cụ thể
    
//     // Địa điểm/khu vực hoạt động
//     location: "gần đại học công nghiệp hà nội, việt nam",  // Vị trí địa lý cụ thể
    
//     // Mối quan hệ/connection
//     relationship: "Anh họ bán điện thoại"  // Người quen/mối quan hệ trong ngành
// }

const generatePromptForBusinessRecommendations = (requirement) => {
    const prompt = `
    Dựa trên thông tin sau đây về người muốn kinh doanh:
    ${requirement}
    Hãy phân tích và đề xuất 5 mô hình/dịch vụ kinh doanh (bám sát vốn ban đầu) phù hợp nhất với người này.
    Trả về kết quả dưới dạng JSON với format sau:
    {
        "business_models": [
            {
                "name": "Tên mô hình kinh doanh",
                "explanation": "Giải thích tại sao phù hợp và giải thích chi tiết về mô hình kinh doanh này, kiến thức cần có (100 chữ)",
                "swot_analysis": {
                      "strengths": [
                          "Điểm mạnh 1",
                          "Điểm mạnh 2",
                          "Điểm mạnh 3",
                          "Điểm mạnh 4",
                          "Điểm mạnh 5"
                      ],
                      "weaknesses": [
                          "Điểm yếu 1",
                          "Điểm yếu 2",
                          "Điểm yếu 3",
                          "Điểm yếu 4",
                          "Điểm yếu 5"
                      ],
                      "opportunities": [
                          "Cơ hội 1",
                          "Cơ hội 2",
                          "Cơ hội 3",
                          "Cơ hội 4",
                          "Cơ hội 5"
                      ],
                      "threats": [
                          "Thách thức 1",
                          "Thách thức 2",
                          "Thách thức 3",
                          "Thách thức 4",
                          "Thách thức 5"
                      ]
                  },
                "costs": [
                    {
                        "item": "Tên chi phí (bám sát vốn ban đầu)",
                        "amount": "Số tiền",
                        "description": "Mô tả chi tiết"
                    }
                ],
                "total_investment": "Tổng đầu tư (bám sát vốn ban đầu)",
                "roi_time": "Thời gian hoàn vốn",
                "recommendations": [
                    {
                        "title": "Tiêu đề lời khuyên",
                        "content": "Nội dung chi tiết"
                    }
                ]
            }
        ]
    }
    Đảm bảo:
    1. Sắp xếp theo thứ tự phù hợp nhất
    2. Mỗi mô hình có ít nhất 4 chi phí
    3. Mỗi mô hình có ít nhất 4 lời khuyên
    4. Các số liệu phải thực tế và hợp lý
    5. Tạo đầy đủ nội dung theo cấu trúc json
    6. Tạo đủ 5 mô hình kinh doanh
    [X] là số
    `;
    return prompt;
};