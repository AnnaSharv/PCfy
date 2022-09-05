import React , {useContext, useEffect, useState, useRef} from 'react';
import {Context} from '../Datacontext'
import {ContextTeamPosition} from '../Datacontext'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Success from '../components/Success'
import Arrow from '../assets/Vector.svg'
import LogoRounded from '../assets/logo-round.svg'





function Fillform() {
  const { register, handleSubmit,  watch, getValues,formState: { errors, touchedFields } } = useForm({
    mode: 'onChange',
    defaultValues: {
    },
    criteriaMode: "all"
  });


  
  const teams = useContext(Context);
  // const tp = useContext(ContextTeamPosition);
  const [positions, setPositions] = useState([])
  const [filteredPositions, setFilteredPositions] = useState([])
  const [activeTeamId, setActiveTeamId] = useState([])
  const [page, setPage] = useState(1)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isTeamEnabled, setIsTeamEnabled] = useState(false)
  const [selectBorder, setselectBorder] = useState('')
  const [selectBorderPosition, setselectBorderPosition] = useState('')
  const [laptopborder, setlaptopborder] = useState('')
  const [laptopbrand, setlaptopbrand] = useState('')
 
  const [allGood, setAllGood] = useState(false)

  const [errorBorder, setErrorBorder] = useState('')
  const [laptopbrands, setLaptopbrands] = useState([])
  const [cpus, setCpus] = useState([])
  const [laptopimage, setlaptopimage] = useState()


  const [displayImg, setDisplayImage] = useState("")

  
let watchData = watch()

let navigate = useNavigate()
let formStepOne = useRef()
let formStepTwo=useRef()
let back = useRef()
let send = useRef()

  const goBack = () => {
   
   if( page === 1) {
     navigate(-1)
   } 
    if(page === 2) {
      formStepTwo.current.classList.add("d-none")
      formStepOne.current.classList.add("d-grid")
      back.current.classList.add("d-none")
      send.current.innerText = "შემდეგი"
      setPage(1)
    }

  }

  const navigateToEmployeeInfo = () => {
    if(allGood && page === 2) {
      formStepTwo.current.classList.add("d-none")
      formStepOne.current.classList.add("d-grid")
      back.current.classList.add("d-none")
      send.current.innerText = "შემდეგი"
      setPage(1)
    }
  }
  const navigateToLaptopInfo = () => {
    if(allGood && page === 1) {
      formStepOne.current.classList.add("d-none")
      formStepTwo.current.classList.add("d-grid")
      //back.current.classList.add("d-none")
      send.current.innerText = "შემდეგი"
      setPage(2)
    }
    //=====es droebit
    // formStepOne.current.classList.add("d-none")
    //   formStepTwo.current.classList.add("d-grid")
    //   send.current.innerText = "შემდეგი"
    //   setPage(2)
  }

  useEffect(() => {
      fetch('https://pcfy.redberryinternship.ge/api/positions')
      .then(res => res.json())
      .then(res => setPositions(res.data))

      
      fetch('https://pcfy.redberryinternship.ge/api/brands')
      .then(res => res.json())
      .then(res => setLaptopbrands(res.data))

      fetch('https://pcfy.redberryinternship.ge/api/cpus')
      .then(res => res.json())
      .then(res => setCpus(res.data))
  
  }, [])

  useEffect(() => {
      window.localStorage.setItem("id", activeTeamId)
      let filteredPositions = []
    
      positions.filter((position, i) =>{ 
        return position.team_id === activeTeamId && filteredPositions.push([position.name, position.id])
      })

      setFilteredPositions(filteredPositions)

  }, [activeTeamId])
  
  useEffect(() => {
    let isInputEmpty = true
    let isError =  Object.keys(errors).length !== 0

    Object.keys(touchedFields).length < 6 
    ? isInputEmpty = true : isInputEmpty = false


   isInputEmpty || isError ? setIsDisabled(true) : setIsDisabled(false)

   
    if (isInputEmpty || isError)  {
      setAllGood(false)
      setErrorBorder('inputError')
    } else {
      setAllGood(true)
      setErrorBorder('border-ok')
    }

  }, [watchData])
  




    
  
   const handleImage = (e) => {
    let reader = new FileReader()
    reader.onload = () => {
        if(reader.readyState === 2) {
          setDisplayImage(reader.result)
        }
    }
    reader.readAsDataURL(e.target.files[0])

   }

  const onSubmit = () => {
    let formData = new FormData();
    let form = getValues()
    form.token = "5b82dd95e9242fd358e426ebfdfc3315"

    //let file = e.target.files[0]
    // ასე loop-ით არ ქნა, რავიცი
    // for (const [key, value] of Object.entries(form)) {
    //       formData.append(key, value)             
    // }
   
 
   
  formData.append("name", form.name);
  formData.append("surname" , form.surname);
  formData.append("team_id" , form.team_id)
  formData.append("position_id" , form.position_id);
  formData.append("phone_number" , form.phone_number);
  formData.append("email" , form.email);
  formData.append("token" , form.token);

  formData.append("laptop_name" , form.laptop_name);
  formData.append("laptop_brand_id" , form.laptop_brand_id);
  formData.append("laptop_cpu" , form.laptop_cpu);
  formData.append("laptop_cpu_cores" , form.laptop_cpu_cores);
  formData.append("laptop_cpu_threads" , form.laptop_cpu_threads);
  formData.append("laptop_ram" , form.laptop_ram);
  formData.append("laptop_hard_drive_type" , form.laptop_hard_drive_type);
  formData.append("laptop_state" , "new");
  formData.append("laptop_price" , "2550");
  formData.append("laptop_purchase_date" , "9/4/2022");
  formData.append('laptop_image', laptopimage);




  fetch("https://pcfy.redberryinternship.ge/api/laptop/create",
      {
          body: formData,
          method: "post"
  });
  
  }
   

 
  

  return (

    // page === 1 || page === 2 ?
     <div className='fill-form-container'>
      
        <button className='goback position-relative' onClick={goBack}> 
          <img src={Arrow} alt="arrow" /> 
        </button>

        <div className='d-flex menu'>          
          <h6 className={page === 1  ? "activelink" : ""} onClick={navigateToEmployeeInfo}>თანამშრომლის ინფო </h6>
          <h6 className={page === 2  ? "activelink" : ""} onClick={ navigateToLaptopInfo}>ლეპტოპის მახასიათებლები</h6> 
        </div>
  
        <div className='fill-form'>
          <Form  className='employee-form' onSubmit={handleSubmit(onSubmit)} name="form">
            {
              <>
                <fieldset className={page === 1 ? 'employee-form w-100 d-grid' : "employee-form w-100 ifdisplay"}
                 ref={formStepOne} >
                <div className='d-flex justify-content-between name-container'>
                  <Form.Group  controlId="formBasicPassword"   >
                      <Form.Label 
                        name="firstname"
                        className={`firstname noborder ${errors.firstname && errorBorder}`} >
                          სახელი
                      </Form.Label>

                      <Form.Control 
                        type="text" 
                        name="name" 
                        className={`name noerrtext ${errors.name && errorBorder}`}
                        placeholder="გრიშა" 
                        defaultValue=''
                        // autoComplete="off"
                        {...register("name", 
                        { required: {value: true, message:"შეავსე ველი"}, 
                          minLength: {value:2, message:"გამოიყენე მინიმუმ 2 სიმბოლო"}, 
                          pattern:{value: /^[ა-ჰ]+$/g, message:"გამოიყენე ქართული ასოები" }
                        },
                        )}
                      />
                              
                      <Form.Text 
                       className="text-muted" >
                         <span 
                           name="name" 
                           className={`name noborder ${errors.name && errorBorder}`}>
                            {errors.name ? errors.name.message : "მინიმუმ 2 სიმბოლო, ქართული ასოები"}
                          </span>
                      </Form.Text>
                  </Form.Group>

                  <Form.Group  controlId="formBasicText" >
                      <Form.Label 
                      name="surname"
                      className={`surname noborder ${errors.surname && errorBorder}`}>
                        გვარი
                      </Form.Label>

                      <Form.Control 
                      type="text" 
                      name="surname" 
                      className={`surname noerrtext ${errors.surname && errorBorder}`}
                      placeholder="ონიანი" 
                      defaultValue=''
                      // autoComplete="off"   
                      {...register("surname", 
                      { required: {value: true, message:"შეავსე ველი"}, 
                        minLength: {value:2, message:"გამოიყენე მინიმუმ 2 სიმბოლო"}, 
                        pattern:{value: /^[ა-ჰ]+$/g, message:"გამოიყენე ქართული ასოები" }
                      },
                    )}
                      />
                      <Form.Text className="text-muted">
                          <span 
                           name="surname" 
                           className={`surname noborder ${errors.surname && errorBorder}`}>
                            {errors.surname ? errors.surname.message : "მინიმუმ 2 სიმბოლო, ქართული ასოები"}
                          </span>
                     
                      </Form.Text>
                  </Form.Group>
                </div>
                
                <Form.Group  controlId="formBasicPassword">
                    <Form.Select aria-label="Default select example"
                    name="team_id" 
                    className={`team_id noerrtext ${errors.team_id && errorBorder} ${selectBorder}`}
                    defaultValue=""
                        {...register("team_id", {
                          required: "აირჩიეთ გუნდი",
                        })}
                    onChange={(e) => {
                      setActiveTeamId(e.target.value)
                      setIsTeamEnabled(true)
                      setselectBorder('border-ok')
                      // let ind = e.nativeEvent.target.selectedIndex
                      // tp({...tp, team: e.nativeEvent.target[ind].innerText})
                    
                    }}
                    >
                      
                        <option className='d-none' value="">თიმი</option>
                        {
                            teams.length !== 0 ?
                                teams.map((team,i) => {
                                    return <option value={team.id} key={i}  className={`team_id  ${errors.team && errorBorder}`}>{team.name}</option>
                                    
                                }) :
                                <option>იტვირთება ...</option>
                        }
                    </Form.Select>
                   
                    
                </Form.Group>

                <Form.Group  controlId="formBasicPassword">
                    <Form.Select aria-label="Default select example"
                        // disabled={isTeamEnabled ? false : true}
                        name="position_id"
                        className={`position_id noerrtext ${errors.position_id && errorBorder}  ${selectBorderPosition}`}
                        defaultValue=""
                        {...register("position_id", {
                          required: "აირჩიეთ პოზიცია",
                        })}
                
                        onChange={(e) => {
                          let ind = e.nativeEvent.target.selectedIndex
                          let res = e.nativeEvent.target[ind].innerText
                          // tp({...tp, team: e.nativeEvent.target[ind].innerText})
                         
                          setselectBorderPosition('border-ok')
                          
                        }}
                        
                    >
                        <option className='d-none' value="">პოზიცია</option>
                        {
                          filteredPositions.map((position,i) => {
                            return <option value={position[1]} key={i}>{position}</option>
                          })
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label
                     name="email"
                     className={`email noborder ${errors.email && errorBorder}`}
                    >
                      მეილი
                    </Form.Label>
                    <Form.Control 
                    type="email" 
                    name="email"
                    className={`email noerrtext ${errors.email && errorBorder}`}
                    placeholder="მეილი" 
                    defaultValue=''
                    // autoComplete="off"
                    {...register("email", 
                    { required: {value: true, message:"შეავსე ველი"}, 
                    // /[A-Za-z0-9._%+-]+@redberry\.ge$/g
                      pattern:{value: /^[A-Za-z0-9._%+-]+@redberry\.ge$/g, message:"უნდა მთავრდებოდეს @redberry.ge-თი" }
                    },
                    )}
                    />
        
                    <Form.Text 
                       className="text-muted" >
                         <span 
                           name="email" 
                           className={`email noborder ${errors.email && errorBorder}`}>
                            {errors.email ? errors.email.message : " უნდა მთავრდებოდეს @redberry.ge-ით"}
                          </span>
                      </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label
                    name="phone_number"
                    className={`phone_number noborder ${errors.phone_number && errorBorder}`}
                    >
                      ტელეფონის ნომერი
                    </Form.Label>
                    <Form.Control 
                    type="text" 
                    name="phone_number" 
                    className={`phone_number noerrtext ${errors.phone_number && errorBorder}`}
                    placeholder="+995 598 00 07 01" 
                    defaultValue=''
                    // autoComplete="off"
                    {...register("phone_number", 
                    { required: {value: true, message:"შეავსე ველი"}, 
                      minLength: {value:13}, 
                      maxLength: {value:13}, 
                      pattern:{value: /[+0-9]/g}
                    },
                    )}
                    />
                    <Form.Text className={`text-muted noborder ${errors.phone_number && errorBorder}`}>
                    უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს
                        
                    </Form.Text>
                </Form.Group>
                </fieldset>



                <fieldset  ref={formStepTwo} className={page === 2 ? 'employee-form w-100 d-grid' :"employee-form w-100 ifdisplay" }>
                    <div className='d-flex position-relative justify-content-between name-container uploadImageContainer' 
                    style={{height: '423px', backgroundColor: '#f6f6f6', borderRadius: '18px', border: '2px dashed #4386a9'}}
                    >

                      <img src={displayImg} alt="uploaded_img" />
                      {/* !!! */}
                      <input type="file" id="input" 
                      accept='image/*'
                         {...register("laptop_image", 
                         { required: {value: true, message:"შეავსე ველი"},
                         onChange: (e) => {
                          setlaptopimage(e.target.files[0])
                          handleImage(e)
                         }
                         },
                         )}
                      />
                    </div>

                    <div className='d-flex justify-content-between align-items-center name-container'>
                       


                        <Form.Group  controlId="formBasicPassword"   >
                            <Form.Label 
                              name="laptop_name"
                              className={`laptop_name noborder ${errors.laptop_name && errorBorder}`} >
                                ლეპტოპის სახელი
                            </Form.Label>

                            <Form.Control 
                              type="text" 
                              name="laptop_name" 
                              className={`laptop_name noerrtext ${errors.laptop_name && errorBorder}`}
                              placeholder="HP" 
                              defaultValue=''
                              // autoComplete="off"
                              {...register("laptop_name", 
                              { required: {value: true, message:"შეავსე ველი"}, 
                                pattern:{value: /^[a-zA-Z0-9!@#$%^&*()_+=]*$/g, message:"ლათინური ასოები, ციფრები, !@#$%^&*()_+= " }
                              },
                              )}
                            />
                                    
                            <Form.Text className="text-muted" >
                              <span 
                                name="laptop_name" 
                                className={`laptop_name noborder ${errors.laptop_name && errorBorder}`}>
                                  {errors.laptop_name ? errors.laptop_name.message : "ლათინური ასოები, ციფრები, !@#$%^&*()_+= "}
                              </span>
                            </Form.Text>
                        </Form.Group>


                        <Form.Group  controlId="formBasicPassword">
                            <Form.Select aria-label="Default select example"
                              name="laptop_brand_id" 
                              className={`laptop_brand_id noerrtext ${errors.laptop_brand_id && errorBorder} `}
                              //${laptop_brand_id} zemot klasshi qonda
                              defaultValue=""
                                  {...register("laptop_brand_id", {
                                    required: "აირჩიეთ ბრენდი",
                                  }
                                )}

                                  
                              onChange={(e) => {
                                setlaptopbrand('border-ok')
                            }}>
                          
                            <option className='d-none' value="">ლეპტოპის ბრენდი</option>
                            {
                                laptopbrands.length !== 0 ?
                                laptopbrands.map((laptopbrand,i) => {
                                        return <option  key={i}  className={`laptop_brand_id  ${errors.laptopbrand && errorBorder}`} value={laptopbrand.id}>{laptopbrand.name}</option>
                                        
                                    }) :
                                    <option>იტვირთება ...</option>
                            }
                        </Form.Select>
                        </Form.Group>
                      
                    </div>
                  

                  <div className='container-middle-form'>
                  <div className='d-flex justify-content-between align-items-center name-container '>
                        <Form.Group  controlId="formBasicPassword">
                            <Form.Select aria-label="Default select example"
                              name="laptop_cpu" 
                              className={`laptop_cpu noerrtext ${errors.laptop_cpu && errorBorder} ${laptopborder}`}
                              defaultValue=""
                                  {...register("laptop_cpu", {
                                    required: "აირჩიეთ laptop_cpu",
                                  })}
                              onChange={() => {setlaptopborder('border-ok')}}>
                          
                            <option className='d-none' value="">CPU</option>
                            {
                                cpus.length !== 0 ?
                                cpus.map((cpu,i) => {
                                        return <option  key={i}  className={`laptop_cpu  ${errors.cpu && errorBorder}`}>{cpu.name}</option>
                                    }) :
                                    <option>იტვირთება ...</option>
                            }
                            </Form.Select>
                        </Form.Group>

                        <Form.Group  controlId="formBasicPassword"   >
                          <Form.Label 
                            name="laptop_cpu_cores"
                            className={`laptop_cpu_cores noborder ${errors.laptop_cpu_cores && errorBorder}`} >
                              CPU-ს ბირთვი
                          </Form.Label>

                          <Form.Control 
                            type="text" 
                            name="laptop_cpu_cores" 
                            className={`laptop_cpu_cores noerrtext ${errors.laptop_cpu_cores && errorBorder}`}
                            placeholder="14" 
                            defaultValue=''
                            // autoComplete="off"
                            {...register("laptop_cpu_cores", 
                            { required: {value: true, message:"შეავსე ველი"}, 
                              pattern:{value: /^[0-9]*$/g, message:"მხოლოდ ციფრები" }
                            },
                            )}
                          />
                                  
                          <Form.Text 
                          className="text-muted" >
                            <span 
                              name="laptop_cpu_cores" 
                              className={`laptop_cpu_cores noborder ${errors.laptop_cpu_cores && errorBorder}`}>
                                {errors.laptop_cpu_cores ? errors.laptop_cpu_cores.message : "მხოლოდ ციფრები"}
                              </span>
                          </Form.Text>
                        </Form.Group>

                        <Form.Group  controlId="formBasicPassword"   >
                          <Form.Label 
                            name="laptop_cpu_threads"
                            className={`laptop_cpu_threads noborder ${errors.laptop_cpu_threads && errorBorder}`} >
                              CPU-ს ნაკადი
                          </Form.Label>

                          <Form.Control 
                            type="text" 
                            name="laptop_cpu_threads" 
                            className={`laptop_cpu_threads noerrtext ${errors.laptop_cpu_threads && errorBorder}`}
                            placeholder="365" 
                            defaultValue=''
                            // autoComplete="off"
                            {...register("laptop_cpu_threads", 
                            { required: {value: true, message:"შეავსე ველი"}, 
                              pattern:{value: /^[0-9]*$/g, message:"მხოლოდ ციფრები" }
                            },
                            )}
                          />
                                  
                          <Form.Text 
                          className="text-muted" >
                            <span 
                              name="laptop_cpu_threads" 
                              className={`laptop_cpu_threads noborder ${errors.laptop_cpu_threads && errorBorder}`}>
                                {errors.laptop_cpu_threads ? errors.laptop_cpu_threads.message : "მხოლოდ ციფრები"}
                              </span>
                          </Form.Text>
                        </Form.Group>
                    </div>


                    <div className='d-flex justify-content-between align-items-center name-container'>
                        <Form.Group>
                              <Form.Label 
                                name="laptop_ram"
                                className={`laptop_ram noborder ${errors.laptop_ram && errorBorder}`} >
                                  ლეპტოპის RAM (GB)
                              </Form.Label>

                              <Form.Control 
                                type="text" 
                                name="laptop_ram" 
                                className={`laptop_ram noerrtext ${errors.laptop_ram && errorBorder}`}
                                placeholder="16" 
                                defaultValue=''
                                // autoComplete="off"
                                {...register("laptop_ram", 
                                { required: {value: true, message:"შეავსე ველი"}, 
                                  pattern:{value: /^[0-9]*$/g, message:"მხოლოდ ციფრები" }
                                },
                                )}
                              />
                                      
                              <Form.Text 
                              className="text-muted" >
                                <span 
                                  name="laptop_ram" 
                                  className={`laptop_ram noborder ${errors.laptop_ram && errorBorder}`}>
                                    {errors.laptop_ram ? errors.laptop_ram.message : "მხოლოდ ციფრები"}
                                  </span>
                              </Form.Text>
                        </Form.Group>

                        <Form.Group>
                          <Form.Label 
                            name="laptop_hard_drive_type"
                            className={`laptop_hard_drive_type noborder choose-div-label ${errors.laptop_hard_drive_type && errorBorder}`} >
                              მეხსიერების ტიპი
                          </Form.Label>

                          <Form.Check
                          className='form-check form-check-space' 
                            type={"radio"}
                            id={`default`}
                            label={`SSD`}
                            value={"SSD"}
                            onClick={(e) => {
                              console.log(e.target.checked)
                            }}
                            {...register("laptop_hard_drive_type")}
                          />
                          <Form.Check
                          className='form-check' 
                             type={"radio"}
                             id={`default`}
                             label={`HDD`}
                             value={"HDD"}
                             onClick={(e) => {
                               console.log(e.target.checked)
                             }}
                             {...register("laptop_hard_drive_type")}
                          />

                        </Form.Group>
                    </div>
                  </div>
               
                  



                    <div className='d-flex justify-content-between  name-container choose'>
                        <Form.Group>
                              <Form.Label 
                                name="laptop_purchase_date"
                                className={`laptop_purchase_date noborder ${errors.laptop_purchase_date && errorBorder}`} >
                                  შეძენის რიცხვი (არჩევითი)
                              </Form.Label>

                              <Form.Control 
                                type="text" 
                                name="laptop_purchase_date" 
                                className={`laptop_purchase_date noerrtext ${errors.laptop_purchase_date && errorBorder}`}
                                placeholder="დდ / თთ / წწწწ" 
                                defaultValue=''
                                // autoComplete="off"
                                {...register("laptop_purchase_date", 
                                { required: {value: false, message:"შეავსე ველი"}, 
                                  pattern:{value: /^[0-9]/g, message:"მხოლოდ ციფრები" }
                                },
                                )}
                              />
                        </Form.Group>


                        <Form.Group>
                              <Form.Label 
                                name="laptop_price"
                                className={`laptop_price noborder ${errors.laptop_price && errorBorder}`} >
                                  ლეპტოპის ფასი
                              </Form.Label>

                              <Form.Control 
                                type="text" 
                                name="laptop_price" 
                                className={`laptop_price noerrtext ${errors.laptop_price && errorBorder}`}
                                placeholder="0000" 
                                defaultValue=''
                                // autoComplete="off"
                                {...register("laptop_price", 
                                { required: {value: true, message:"შეავსე ველი"}, 
                                  pattern:{value: /^[0-9]/g, message:"მხოლოდ ციფრები" }
                                },
                                )}
                              />
                                      
                              <Form.Text 
                              className="text-muted" >
                                <span 
                                  name="laptop_price" 
                                  className={`laptop_price noborder ${errors.laptop_price && errorBorder}`}>
                                    {errors.laptop_price ? errors.laptop_price.message : "მხოლოდ ციფრები"}
                                  </span>
                              </Form.Text>
                        </Form.Group>
                    </div>


                    <div className='d-block justify-content-between align-items-center name-container'>
                        
                        <Form.Group>
                          <Form.Label 
                            name="laptop_state"
                            className={`laptop_state noborder choose-div-label  ${errors.laptop_state && errorBorder}`} >
                              ლეპტოპის მდგომარეობა
                          </Form.Label>
                          

                          <div className='d-flex'>
                            <Form.Check
                            className='form-check form-check-space' 
                              type={"radio"}
                              id={`default`}
                              label={`ახალი`}
                              value={"ახალი"}
                              {...register("laptop_state", 
                              // { required: {value: true, message:"შეავსე ველი"}
                              // },
                              )}
                            />
                            <Form.Check
                            className='form-check' 
                              type={"radio"}
                              id={`default`}
                              label={`მეორადი`}
                              value={"მეორადი"}
                              {...register("laptop_state", 
                              // { required: {value: true, message:"შეავსე ველი"}
                              // },
                              )}
                            />
                          </div>
                         
                        </Form.Group>
                    </div>
                  
                   

                </fieldset>

                {
                  page === 3 && <Success />
                }
                <div className='d-flex'>
                  <Button 
                    variant="primary" 
                    // type="submit"   
                    className={page === 1 ? "d-none" : "d-block btnreverse me-auto d-flex"}
                    ref={back}
                    onClick={() => setPage((currPage) => currPage - 1)}> 
                      უკან 
                  </Button>

                  <Button 
                    // disabled={isDisabled}
                    variant="primary" 
                    type={page === 3 ? "submit" : "button"} 
                    className=" btnnext ms-auto d-flex"
                    ref={send}
                    onClick={() => {
                      handleSubmit(onSubmit)
                      allGood === true ?  setPage((currPage) => currPage + 1)
                      : setPage((currPage) => currPage)

                      if(allGood && page === 2) {
                        console.log("gaigzavna")
                      }

                
                      
                      // for (const [key, value] of Object.entries(watchData)) {
                        
                      //   let inputs = document.getElementsByName(key)
                                            
                      //   if(value.length === 0 ) {
                      //     // for (const input of inputs) {
                      //     //   input.classList.add("inputError")
                      //     // }
                      //     console.log(value)
                     
                      //   }
                      //  }
                      }}
                      > 
                        { page === 2 ? " დამახსოვრება " : " შემდეგი"}
                    </Button>
                </div>
              </>
            }

           
          </Form>

         

         
        </div>

        <img src={LogoRounded} alt="redberry-logo" className='logo-rounded '/>
     </div> 
    //  : 
    //  <Success />
  );
}

export default Fillform;