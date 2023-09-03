import React, { Component } from 'react'

export default class ThongTinHangGhe extends Component {
    render() {
        return (
            <div>
                <div>
                    <button className="gheDuocChon"></button> <span className='text-danger' style={{fontSize:"20px"}}>Ghế Đã Đặt</span> 
                    <br />
                    <button className='gheDangChon'></button> <span class="text-success" style={{fontSize:"20px"}}>Ghế Đang Chọn</span>
                    <br />
                    <button className='ghe' style={{marginLeft:"0"}}></button> <span className='text-light' style={{fontSize:"20px"}}>Ghế Trống</span>
                </div>

            
                <div class="table-responsive">
                    <table class="table" border="2">
                        <thead>
                            <tr className='text-light' style={{fontSize:"20px"}}>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        )
    }
}
