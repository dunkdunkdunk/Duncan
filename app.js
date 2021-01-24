zero = "คุณกำลังจะกระพิบตา"
one = "คุณกำลังจะสูดลมหายใจ"
two = "คุณกำลังอ่านข้อความนี้"
three = "ที่ผ่านมาเป็นเพียงอดีตนะจ๊ะเย้ๆบรึ้ยย"
four = "ช่วงนี้คุณต้องใส่หน้ากากอนามัยเมื่อออกจากบ้าน"
five = "คุณเป็นดั่งแสงจันทร์ในวันที่ทุกอย่างหลับใหล"
six = "ความอบอุ่นของคุณอบอุ่นดังไมโครเวฟ"
seven = "คุณชอบห่มผ้าตอนเปิดแอร์"
eight = "คุณมีเลข 8 อยู่ในเบอร์โทรศัพท์"
nine = "คุณได้ก้าวผ่านสิ่งต่างๆมามากมาย ขอให้คุณก้าวต่อไป"

function getInputValueandOutput()
{
    let num = document.getElementById("number").value
    document.getElementById("display").innerHTML = `Your phone number is ${num}`
}    

function analyze()
{
    let telNumber = document.getElementById("number").value
    for(let index=0 ; index<telNumber.length ; index++)
    {
        console.log(index + 'is' + telNumber[index])
        if (telNumber[index]=='0'){
            document.getElementById("result0").innerHTML = zero
        }
        if (telNumber[index]=='1'){
            document.getElementById("result1").innerHTML = one
        }
        if (telNumber[index]=='2'){
            document.getElementById("result2").innerHTML = two
        } 
        if (telNumber[index]=='3'){
            document.getElementById("result3").innerHTML = three
        } 
        if (telNumber[index]=='4'){
            document.getElementById("result4").innerHTML = four
        } 
        if (telNumber[index]=='5'){
            document.getElementById("result5").innerHTML = five
        } 
        if (telNumber[index]=='6'){
            document.getElementById("result6").innerHTML = six
        } 
        if (telNumber[index]=='7'){
            document.getElementById("result7").innerHTML = seven
        } 
        if (telNumber[index]=='8'){
            document.getElementById("result8").innerHTML = eight
        } 
        if (telNumber[index]=='9'){
            document.getElementById("result9").innerHTML = nine
        } 
    }
}

function call()
{
    getInputValueandOutput()
    analyze()
}