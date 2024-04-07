<script>
    let root=document.getElementById("root")
   
    
   let div1=document.createElement("div")
   let div2=document.createElement("div")
   let div3=document.createElement("div")
   let div4=document.createElement("div")

   let img=document.createElement("img")
   img.src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Vijay_Shekhar_Sharma_Paytm_96f52579b8.jpg"
   div1.appendChild(img)


   let img2=document.createElement("img")
   img2.src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Rectangle_427_637d69bb57.png"
   div2.appendChild(img2)

   let img3=document.createElement("img")
   img3.src="https://masai-website-images.s3.ap-south-1.amazonaws.com/amrish_rau_pine_labs_144e5e587c.jpg"
   div3.appendChild(img3)

   let img4=document.createElement("img")
   img4.src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Sampad_swain_Instamojo_f12bf6341e.jpg"
   div4.appendChild(img4)

   
   let h3=document.createElement("h3")
   h3.innerHTML="Vijay Shekhar Sharma"
   div1.appendChild(h3)

   let h32=document.createElement("h3")
   h32.innerHTML="Kunal Shah"
   div2.appendChild(h32)

   let h33=document.createElement("h3")
   h33.innerHTML="Amrish Rau"
   div3.appendChild(h33)

   let h34=document.createElement("h3")
   h34.innerHTML="Sampad Swain"
   div4.appendChild(h34)

   let para=document.createElement("p")
   para.innerHTML="Founder & CEO"
   div1.appendChild(para)

   let para2=document.createElement("p")
   para2.innerHTML="Founder"
   div2.appendChild(para2)

   let para3=document.createElement("p")
   para3.innerHTML="CEO"
   div3.appendChild(para3)

   let para4=document.createElement("p")
   para4.innerHTML="Co-Founder & CEO"
   div4.appendChild(para4)


   let Logo=document.createElement("img")
    Logo.src="https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_rect_06df45a24f.svg"
    Logo.className="logo"
   div1.appendChild(Logo)

   let Logo2=document.createElement("img")
    Logo2.src="https://masai-website-images.s3.ap-south-1.amazonaws.com/cred_0a47d7b4f8.png"
    Logo2.className="logo"
   div2.appendChild(Logo2)

   let Logo3=document.createElement("img")
    Logo3.src="https://masai-website-images.s3.ap-south-1.amazonaws.com/pine_labs_0aa2407434.png"
    Logo3.className="logo"
   div3.appendChild(Logo3)

   let Logo4=document.createElement("img")
    Logo4.src="https://masai-website-images.s3.ap-south-1.amazonaws.com/instamojo_8763e704f7.png"
    Logo4.className="logo"
   div4.appendChild(Logo4)

   root.appendChild(div1)
   root.appendChild(div2)
   root.appendChild(div3)
   root.appendChild(div4)
  
</script>