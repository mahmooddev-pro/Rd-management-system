package com.cs.demo.cntrl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cs.demo.Entity.Rduser;
import com.cs.demo.Repo.Rdrepo;



@CrossOrigin(origins = "*")
@RestController



public class Rdcntrl {
	@Autowired
	
	private Rdrepo repo;
	
	@GetMapping("rduser")
	List<Rduser> getrduser(){
		List<Rduser> lst=repo.findAll();
		return lst;
	}
	
	@GetMapping("/getuserById/{uid}")
	Optional<Rduser> Getuserbyid(@PathVariable("uid") Long uid) {
		Optional<Rduser> lst=repo.findById(uid);
		return lst;
	}
	
	@PostMapping("/saverduser")
	public Rduser saveuser(@RequestBody Rduser p)
	{
		return repo.save(p);
	}
	
	
		@PutMapping("/uddtuser")
		public Rduser updateps(@RequestBody Rduser p)
		{
			return repo.save(p);
		}
	
	@DeleteMapping("/delusr/{id}")
	public String DeleteBlg(@PathVariable("id") Long id)
	
	{
		repo.deleteById(id);
		return "Record Delete Successfully.....!";
	}
	
	

}
