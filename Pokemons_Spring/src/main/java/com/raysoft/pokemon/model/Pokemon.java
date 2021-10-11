package com.raysoft.pokemon.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pokemon {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column
	private String Name;
	
	@Column
	private String Type1;
	
	@Column
	private String Type2;
	
	@Column
	private int Total;
	
	@Column
	private int HP;
	
	@Column
	private int Attack;
	
	@Column
	private int Defense;
	
	@Column
	private int SpAtk;
	
	@Column
	private int SpDef;
	
	@Column
	private int Speed;
	
	@Column
	private int Generation;
	
	@Column
	private boolean Legendary;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		this.Name = name;
	}

	public String getType1() {
		return Type1;
	}

	public void setType1(String type1) {
		this.Type1 = type1;
	}

	public String getType2() {
		return Type2;
	}

	public void setType2(String type2) {
		this.Type2 = type2;
	}

	public int getTotal() {
		return Total;
	}

	public void setTotal(int total) {
		this.Total = total;
	}

	public int getHP() {
		return HP;
	}

	public void setHP(int HP) {
		this.HP = HP;
	}

	public int getAttack() {
		return Attack;
	}

	public void setAttack(int attack) {
		this.Attack = attack;
	}

	public int getDefense() {
		return Defense;
	}

	public void setDefense(int defense) {
		this.Defense = defense;
	}

	public int getSpAtk() {
		return SpAtk;
	}

	public void setSpAtk(int spAtk) {
		this.SpAtk = spAtk;
	}

	public int getSpDef() {
		return SpDef;
	}

	public void setSpDef(int spDef) {
		this.SpDef = spDef;
	}

	public int getSpeed() {
		return Speed;
	}

	public void setSpeed(int speed) {
		this.Speed = speed;
	}

	public int getGeneration() {
		return Generation;
	}

	public void setGeneration(int generation) {
		this.Generation = generation;
	}

	public boolean isLegendary() {
		return Legendary;
	}

	public void setLegendary(boolean legendary) {
		this.Legendary = legendary;
	}
	
	
}
