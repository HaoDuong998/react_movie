import React, { Component } from 'react'
export default class HangGhe extends Component {
    renderGhe = () => {
        // console.log(this.props)
        let cssGheDaDat ='';
        let disabled = false;
        return this.props.hangGhe.danhSachGhe.map((ghe,index)=> {
            if(ghe.daDat){
                cssGheDaDat = 'gheDuocChon'
                disabled = true;
            }

            //trạng thái ghế đang đặt
            // let cssGheDangDat ='';
            // let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe);
            // if(indexGheDangDat !== -1){
            //     cssGheDangDat = "gheDangChon"
            // }
            return <button onClick={()=>{}} className={`ghe ${cssGheDaDat}`}  key={index}>
                {ghe.soGhe}
            </button>
        })
    };

    rendersoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index)=>{
            return <span className='rowNumber fs-4'>{hang.soGhe}</span>
        })
    }

    renderHangGhe = () => {
        if(this.props.soHangGhe === 0) {
            return <div className='ml-4'>
                {this.props.hangGhe.hang} {this.rendersoHang()}
            </div>
        }else {
            return <div>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        }
    }

    render() {
        return (
            <div className='text-light mt-2' style={{fontSize:"15px"}} >
                {this.renderHangGhe()}
            </div>
        )
    }
}
