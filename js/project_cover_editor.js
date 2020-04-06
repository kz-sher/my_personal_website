document.addEventListener('DOMContentLoaded', function(event) { 
    
    // Initialize canvas
    var canvas = document.getElementById("ed_canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;
    var cw = canvas.width;
    var ch = canvas.height;
    ctx.fillStyle = '#ffffff';
    ctx.font = "35px Arial Rounded MT Bold";

    // Store image and text in variable
    var imgArr = [];
    var txtArr = [];
    
    // Function for resetting the environment
    function clear(fromRedraw){
        if(!fromRedraw){
            imgArr = [];
            txtArr = [];
        }
        ctx.clearRect(0, 0, cw, ch);
        initBgImg();
    }

    // Function for redrawing the components
    function redraw(arr, newData, size){
        if(size && arr[0]){
            arr[0].fontSize += parseInt(size);
            ctx.font = String(arr[0].fontSize) + 'px Arial Rounded MT Bold';
        }
        
        if(arr.length === 0){
            return
        }

        arr[0].x += parseInt(newData.x);
        arr[0].y += parseInt(newData.y);

        if(newData.w){
            arr[0].w += parseInt(newData.w);
        }
        if(newData.h){
            arr[0].h += parseInt(newData.h);
        }

        clear(true);
        setTimeout(()=>{
            console.log(imgArr.length)
            if(imgArr.length > 0){
                console.log(imgArr)
                ctx.drawImage(imgArr[0].img, imgArr[0].x, imgArr[0].y, imgArr[0].w, imgArr[0].h)
            }
            if(txtArr.length > 0){
                console.log(txtArr)
                ctx.fillText(txtArr[0].txt, txtArr[0].x, txtArr[0].y)
            }
        },100)

        console.log('Update details:\n' + arr);
    }

    // Load background image from data url
    function initBgImg(){
        var imgBgObj = new Image();
        imgBgObj.onload = function() {
            ctx.drawImage(this, 0, 0, cw, ch);
        };
        imgBgObj.src = '../images/black_with_white_border.png';
    }
    initBgImg();

    // Load image when user uploads it
    var uploadBtn = document.querySelector('#upload_btn');
    var uploadFile = document.querySelector('#upload_file');

    uploadBtn.addEventListener('click', function(e){
        uploadFile.click();
    });

    uploadFile.addEventListener('change', function(e){
        var reader = new FileReader();
        reader.onload = function(event){
            var img = new Image();
            img.onload = function(){
                ctx.drawImage(img, 100, 75, 200, 200);
            }
            imgArr.push({
                x: 100,
                y: 75,
                w: 200,
                h: 200,
                img: img
            })
            img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
        uploadFile.value = ''; // reset file input value
    });

    // Clear canvas when clear button is clicked
    var clearBtn = document.querySelector('#clear_btn');
    clearBtn.addEventListener('click', function(e){
        clear(false);
        console.log(imgArr, txtArr)
    })

    // Add text to canvas 
    var txtText = document.querySelector('#text');
    var enterBtn = document.querySelector('#enter');
    enterBtn.addEventListener('click', function(e){
        var txt = txtText.value;
        ctx.fillText(txt, 100, 355);
        txtArr.push({
            x: 100,
            y: 355,
            txt: txt,
            fontSize: 35
        })
    });

    // Move pic
    var imgUp = document.querySelector('#img_up');
    var imgDown = document.querySelector('#img_down');
    var imgLeft = document.querySelector('#img_left');
    var imgRight = document.querySelector('#img_right');
    var imgMoveSize = document.querySelector('#move_size');

    imgUp.addEventListener('click', function(e){
        var moveSize = imgMoveSize.value ? imgMoveSize.value : 5
        redraw(imgArr, {x: 0, y: -moveSize, w: 0, h: 0}, null)
    });
    imgDown.addEventListener('click', function(e){
        var moveSize = imgMoveSize.value ? imgMoveSize.value : 5
        redraw(imgArr, {x: 0, y: moveSize, w: 0, h: 0}, null)
    });
    imgLeft.addEventListener('click', function(e){
        var moveSize = imgMoveSize.value ? imgMoveSize.value : 5
        redraw(imgArr, {x: -moveSize, y: 0, w: 0, h: 0}, null)
    });
    imgRight.addEventListener('click', function(e){
        var moveSize = imgMoveSize.value ? imgMoveSize.value : 5
        redraw(imgArr, {x: moveSize, y: 0, w: 0, h: 0}, null)
    });
    
    // Move txt
    var txtUp = document.querySelector('#txt_up');
    var txtDown = document.querySelector('#txt_down');
    var txtLeft = document.querySelector('#txt_left');
    var txtRight = document.querySelector('#txt_right');
    var txtMoveSize = document.querySelector('#move_size');

    txtUp.addEventListener('click', function(e){
        var moveSize = txtMoveSize.value ? txtMoveSize.value : 5
        redraw(txtArr, {x: 0, y: -moveSize, w: 0, h: 0}, null)
    });
    txtDown.addEventListener('click', function(e){
        var moveSize = txtMoveSize.value ? txtMoveSize.value : 5
        redraw(txtArr, {x: 0, y: moveSize, w: 0, h: 0}, null)
    });
    txtLeft.addEventListener('click', function(e){
        var moveSize = txtMoveSize.value ? txtMoveSize.value : 5
        redraw(txtArr, {x: -moveSize, y: 0, w: 0, h: 0}, null)
    });
    txtRight.addEventListener('click', function(e){
        var moveSize = txtMoveSize.value ? txtMoveSize.value : 5
        redraw(txtArr, {x: moveSize, y: 0, w: 0, h: 0}, null)
    });

    // resize
    var expandBtn = document.querySelector('#expand');
    var compressBtn = document.querySelector('#compress');
    var attachObj = document.querySelector('#attObj');
    var attMoveSize = document.querySelector('#move_size');

    expandBtn.addEventListener('click', function(){
        var scale = attMoveSize.value ? attMoveSize.value : 5;
        if(attachObj.value === "img"){
            redraw(imgArr, {x: 0, y: 0, w: scale, h: scale}), null;
        }
        else{
            redraw(txtArr, {x: 0, y: 0, w: 0, h: 0}, scale);
        }
    });

    compressBtn.addEventListener('click', function(){
        var scale = attMoveSize.value ? attMoveSize.value : 5;
        if(attachObj.value === "img"){
            redraw(imgArr, {x: 0, y: 0, w: -scale, h: -scale});
        }
        else{
            redraw(txtArr, {x: 0, y: 0, w: 0, h: 0}, -scale);
        }
    });

    // save img
    var imgPlaceholderLink = document.querySelector('#img_placeholder');
    var saveBtn = document.querySelector('#save');

    saveBtn.addEventListener('click', function(){
        var url = canvas.toDataURL();
        imgPlaceholderLink.href = url;
        imgPlaceholderLink.click();
    });
});